import { FC, useState } from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { useStyles } from '../settings-personal-info/styles'
import AppLoadingButton from '../loading-button/AppLoadingButton'
import { useAppDispatch } from '../../utils/hook'
import { updateUserPassword } from '../../store/thunks/auth'

const ChangePasswordComponent: FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const handleChangePassword = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = {
            oldPassword,
            newPassword,
        }

        dispatch(updateUserPassword(data))
    }

    return (
        <Grid
            component="form"
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleChangePassword}
        >
            <Box className={classes.formWrapper}>
                <TextField
                    className={classes.inputField}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type="text"
                    label="Old password"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="text"
                    label="New password"
                    variant="outlined"
                />
                <Box>
                    <AppLoadingButton className={classes.button} type="submit">
                        Change password
                    </AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default ChangePasswordComponent
