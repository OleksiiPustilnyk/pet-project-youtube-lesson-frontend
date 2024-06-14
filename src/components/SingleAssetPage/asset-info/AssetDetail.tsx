import { FC, ReactNode } from 'react'
import { Grid, Typography } from '@mui/material'
import { useStyles } from '../../../pages/single-asset/styles'

interface AssetDetailProps {
    title: string
    value: ReactNode
    trend?: 'up' | 'down'
}

const AssetDetail: FC<AssetDetailProps> = ({ title, value, trend }) => {
    const classes = useStyles()

    return (
        <Grid item sm={6} xs={12} className={classes.card}>
            <Grid className={classes.cardItem}>
                <Typography variant="h2" className={classes.cardTitle}>
                    {title}&nbsp;
                </Typography>
                <Typography
                    variant="h2"
                    className={
                        trend === 'up'
                            ? `${classes.assetPriceDetail} ${classes.trendUp}`
                            : trend === 'down'
                              ? `${classes.assetPriceDetail} ${classes.trendDown}`
                              : classes.assetPriceDetail
                    }
                >
                    {value}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AssetDetail
