import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { Box, Grid, TextField } from '@mui/material'
import { useStyles } from './styles'
import AppLoadingButton from '../../UI/loading-button/AppLoadingButton'
import { getPublicUser, updateUserInfo } from '../../../store/thunks/auth'

const SettingsPersonalInfoComponent: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const classes = useStyles()

    const { user } = useAppSelector((state) => state.auth.user)

    const [formData, setFormData] = useState({
        firstName: '',
        username: '',
        email: '',
    })

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                username: user.username,
                email: user.email,
            })
        }
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(updateUserInfo(formData))
        dispatch(getPublicUser())
    }

    return (
        <Grid
            component="form"
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formWrapper}>
                <TextField
                    className={classes.inputField}
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    type="text"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <Box className={classes.button}>
                    <AppLoadingButton type="submit">Save</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default SettingsPersonalInfoComponent
