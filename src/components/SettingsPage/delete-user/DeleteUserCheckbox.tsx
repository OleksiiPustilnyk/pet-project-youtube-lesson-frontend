import { FC } from 'react'
import { FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import { useStyles } from './styles'

interface DeleteUserCheckboxProps {
    checked: boolean
    onChange: () => void
}

const DeleteUserCheckbox: FC<DeleteUserCheckboxProps> = ({
    checked,
    onChange,
}): JSX.Element => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()

    return (
        <Grid item xs={12} className={classes.checkBoxBlock}>
            <FormGroup>
                <FormControlLabel
                    sx={{
                        justifyContent: 'center',
                    }}
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={onChange}
                            sx={{
                                color: colors.green,
                                '&.Mui-checked': {
                                    color: colors.green,
                                },
                            }}
                        />
                    }
                    label="I agree"
                />
            </FormGroup>
        </Grid>
    )
}

export default DeleteUserCheckbox
