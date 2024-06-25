import { FC, useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../utils/hook'
import { deleteUser } from '../../../store/thunks/auth'
import { useStyles } from './styles'
import DeleteUserCheckbox from './DeleteUserCheckbox'
import DeleteUserWarning from './DeleteUserWarning'

const DeleteUserComponent: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const classes = useStyles()

    const handleDelete = () => {
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/login')
    }

    return (
        <Grid
            container
            className={classes.root}
            spacing={2}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12} className={classes.tabHeading}>
                <Typography variant="h2">Account deleting</Typography>
            </Grid>
            <DeleteUserWarning />
            <DeleteUserCheckbox
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <Grid item xs={12} className={classes.buttonBlock}>
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
