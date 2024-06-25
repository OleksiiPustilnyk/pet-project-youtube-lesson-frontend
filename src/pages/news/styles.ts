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
        newsTitle: {
            marginBottom: 32,
        },
        readMore: {
            marginTop: '25px !important',
            textAlign: 'center',
        },
        img: {
            textAlign: 'center',
        },
        image: {
            borderRadius: 12,
        },
        newsText: {
            color: `${colors.primary[900]}`,
        },
        loading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
    }
})
