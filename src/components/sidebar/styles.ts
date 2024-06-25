import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        drawer: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            boxSizing: 'border-box',
        },
        navBlock: {
            width: '100%',
            borderBottom: `1px solid ${colors.borderColor}`,
        },
        brand: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '30px 15px',
            cursor: 'pointer',
        },
        brandTitle: {
            color: `${
                theme.palette.mode === 'dark'
                    ? colors.white.DEFAULT
                    : colors.black.DEFAULT
            }`,
            fontWeight: '600 !important',
        },
        navList: {
            marginBottom: '55px',
        },

        navItem: {
            '& .MuiListItemIcon-root': {
                color: colors.secondary.DEFAULT,
            },
            '& .MuiListItemText-root': {
                color: colors.secondary.DEFAULT,
            },
            '&.Mui-selected, &:hover': {
                backgroundColor: '#4CAF50 !important',
                color: '#fff',
                borderRadius: '4px',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`,
                },
                '& .MuiListItemText-root': {
                    color: `${colors.white.DEFAULT} !important`,
                },
            },
        },

        active: {
            backgroundColor: '#4CAF50 !important',
            color: '#fff !important',
            borderRadius: '4px !important',
            '& .MuiListItemIcon-root': {
                color: '#fff !important',
            },
            '& .MuiListItemText-root': {
                color: '#fff !important',
            },
        },
    }
})
