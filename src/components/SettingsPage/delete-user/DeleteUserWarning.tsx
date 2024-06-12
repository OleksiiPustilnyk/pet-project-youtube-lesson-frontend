import { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import { useStyles } from './styles'

const DeleteUserWarning: FC = (): JSX.Element => {
    const classes = useStyles()
    return (
        <Grid item xs={12}>
            <Typography variant="body1" className={classes.alertMessage}>
                Dear user, by deleting your account, you delete all personal
                information. After deletion, all your saved information will not
                be available.
            </Typography>
        </Grid>
    )
}

export default DeleteUserWarning
