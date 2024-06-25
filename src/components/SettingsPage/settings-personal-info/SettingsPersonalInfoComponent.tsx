import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../utils/hook'
import { Box, Grid } from '@mui/material'
import { useStyles } from './styles'
import AppLoadingButton from '../../UI/loading-button/AppLoadingButton'
import { getPublicUser, updateUserInfo } from '../../../store/thunks/auth'
import TextFieldComponent from '../../UI/custom-input/TextFieldComponent'

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
                <TextFieldComponent
                    label="Name"
                    placeholder="Enter your name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextFieldComponent
                    label="Username"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <TextFieldComponent
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Box>
                    <AppLoadingButton type="submit">Save</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default SettingsPersonalInfoComponent
