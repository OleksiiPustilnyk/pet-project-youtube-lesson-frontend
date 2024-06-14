import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {},
        tabHeading: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '32px !important',
        },
        alertMessage: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '32px !important',
        },
        formLabel: {
            justifyContent: 'center',
        },
        checkBoxBlock: {
            width: '100%',
            marginBottom: '25px !important',
        },
        checkbox: {
            color: `${colors.green} !important`,
            '&.Mui-checked': {
                color: colors.green,
            },
        },
        buttonBlock: {
            width: '100%',
            textAlign: 'center',
        },
    }
})
