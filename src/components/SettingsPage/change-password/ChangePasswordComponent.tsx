import { FC, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { useStyles } from '../settings-personal-info/styles'
import AppLoadingButton from '../../UI/loading-button/AppLoadingButton'
import { useAppDispatch } from '../../../utils/hook'
import { updateUserPassword } from '../../../store/thunks/auth'
import TextFieldComponent from '../../UI/custom-input/TextFieldComponent'

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
                <TextFieldComponent
                    label="Old password"
                    placeholder="Enter your old password"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <TextFieldComponent
                    label="New password"
                    placeholder="Enter your new password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Box>
                    <AppLoadingButton type="submit">
                        Change password
                    </AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default ChangePasswordComponent
