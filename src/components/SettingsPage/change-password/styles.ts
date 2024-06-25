import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
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
        formWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 0',
        },
        buttonBlock: {
            margin: '32px 0',
        },
    }
})
