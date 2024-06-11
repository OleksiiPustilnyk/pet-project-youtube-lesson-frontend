import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    useTheme,
} from '@mui/material'
import { useStyles } from './styles'

import { tokens } from '../../theme'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../utils/hook'
import { deleteUser } from '../../store/thunks/auth'

const DeleteUserComponent: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleDelete = () => {
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/login')
    }

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant="h2">Account deleting</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" className={classes.alertMessage}>
                    Dear user, by deleting your account, you delete everything
                    personal information. After deletion, all your saved
                    information will not be available.
                </Typography>
            </Grid>
            <Grid item className={classes.checkBoxBlock}>
                <FormGroup>
                    <FormControlLabel
                        sx={{
                            justifyContent: 'center',
                        }}
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                sx={{
                                    color: colors.blue,
                                    '&.Mui-checked': {
                                        color: colors.blue,
                                    },
                                }}
                            />
                        }
                        label="I agree"
                    />
                </FormGroup>
            </Grid>
            <Grid item className={classes.buttonBlock}>
                <Button
                    color="success"
                    variant="outlined"
                    disabled={!checked}
                    onClick={handleDelete}
                >
                    Delete account
                </Button>
            </Grid>
        </Grid>
    )
}
export default DeleteUserComponent
