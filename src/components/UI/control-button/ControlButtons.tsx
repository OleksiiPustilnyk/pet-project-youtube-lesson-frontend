import { FC } from 'react'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../../../pages/single-asset/styles'

interface ControlButtonsProps {
    handleCreateRecord: () => void
}

const ControlButtons: FC<ControlButtonsProps> = ({ handleCreateRecord }) => {
    const navigate = useNavigate()
    const classes = useStyles()

    return (
        <Grid
            container
            justifyContent="center"
            className={classes.cardButtonBlock}
        >
            <Button
                color="success"
                variant="outlined"
                className={classes.cardButton}
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <Button
                color="success"
                variant="outlined"
                className={classes.cardButton}
                onClick={handleCreateRecord}
            >
                Add to favorites
            </Button>
        </Grid>
    )
}

export default ControlButtons
