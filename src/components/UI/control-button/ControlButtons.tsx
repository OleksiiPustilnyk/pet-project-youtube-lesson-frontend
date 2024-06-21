import { FC } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../../../pages/single-asset/styles'
import AppButton from '../app-button/AppButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
            <AppButton
                color="success"
                variant="outlined"
                className={classes.cardButton}
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIcon />}
            >
                Back
            </AppButton>
            <AppButton
                color="success"
                variant="outlined"
                className={classes.cardButton}
                onClick={handleCreateRecord}
            >
                Add to favorites
            </AppButton>
        </Grid>
    )
}

export default ControlButtons
