import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            padding: 32,
            '& a': {
                textDecoration: 'none',
                color: `${
                    theme.palette.mode === 'light'
                        ? colors.black.DEFAULT
                        : colors.white.DEFAULT
                }`,
            },
        },
        blockTitle: {
            textAlign: 'center',
            marginBottom: '32px !important',
        },
        newsBlock: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            '& .MuiPaper-root': {
                backgroundColor: 'transparent !important',
                boxShadow: 'none !important',
                backgroundImage: 'none !important',
            },
        },
        newsTitle: {
            marginBottom: 32,
        },
        readMore: {
            textAlign: 'center',
        },
        img: {
            textAlign: 'center',
        },
        newsText: {
            color: `${colors.primary[900]}`,
        },
    }
})
