import { TextField } from '@mui/material'
import { useStyles } from './style'

interface TextFieldProps {
    label: string
    placeholder: string
    type?: string
    error?: any
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    name?: string
}

const TextFieldComponent: React.FC<TextFieldProps> = ({
    label,
    placeholder,
    type = 'text',
    error,
    value,
    onChange,
    name,
}) => {
    const classes = useStyles()

    return (
        <TextField
            error={!!error}
            fullWidth
            margin="normal"
            label={label}
            variant="outlined"
            type={type}
            placeholder={placeholder}
            helperText={error ? `${error.message}` : ''}
            value={value}
            onChange={onChange}
            name={name}
            className={classes.inputField}
        />
    )
}

export default TextFieldComponent
