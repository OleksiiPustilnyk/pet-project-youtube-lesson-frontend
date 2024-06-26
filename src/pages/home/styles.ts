import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { tokens } from '../../theme'

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            flexGrow: 1,
            padding: 32,
        },
        areaChart: {
            marginBottom: 32,
        },
        topCardItem: {
            backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
            padding: '20px 30px',
            minHeight: 185,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize',
        },
        itemDetails: {
            display: 'flex',
            // height: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '35px',
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '38px',
            margin: '0 0 15px',
        },
        priceTrend: {
            width: 80, // *
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            borderRadius: 4,
            margin: 0,
        },
        trendUp: {
            backgroundColor: '#A9FFA7',
            color: '#037400',
            width: 'max-content',
        },
        trendDown: {
            backgroundColor: '#FFA7A7',
            color: '#740000',
            width: 'max-content',
        },
    }
})
