import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            padding: '20px',
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: colors.green,
                },
            },
            '& label.Mui-focused': {
                color: `${
                    theme.palette.mode === 'dark'
                        ? colors.white.DEFAULT
                        : colors.black.DEFAULT
                }`,
            },
        },
        form: {
            flex: 1,
        },
        incitingText: {
            color: '#4CAF50',
            marginLeft: '10px',
            cursor: 'pointer',
        },
    }
})
