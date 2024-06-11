import { FC } from 'react'
import { TextField } from '@mui/material'
import { useStyles } from './style'

interface CustomInputProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    label: string
}

const CustomInput: FC<CustomInputProps> = ({
    value,
    onChange,
    label,
}: CustomInputProps): JSX.Element => {
    const classes = useStyles()

    return (
        <TextField
            className={classes.inputField}
            type="password"
            value={value}
            onChange={onChange}
            label={label}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    )
}

export default CustomInput
