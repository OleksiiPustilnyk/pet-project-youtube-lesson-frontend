import { FC } from 'react'
import { FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { useStyles } from './styles'

interface DeleteUserCheckboxProps {
    checked: boolean
    onChange: () => void
}

const DeleteUserCheckbox: FC<DeleteUserCheckboxProps> = ({
    checked,
    onChange,
}): JSX.Element => {
    const classes = useStyles()

    return (
        <Grid item xs={12} className={classes.checkBoxBlock}>
            <FormGroup>
                <FormControlLabel
                    className={classes.formLabel}
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={onChange}
                            className={classes.checkbox}
                        />
                    }
                    label="I agree"
                />
            </FormGroup>
        </Grid>
    )
}

export default DeleteUserCheckbox
