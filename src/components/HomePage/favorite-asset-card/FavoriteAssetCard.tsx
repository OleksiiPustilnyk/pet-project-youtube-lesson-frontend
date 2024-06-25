import React from 'react'
import { Box, Grid } from '@mui/material'
import AreaChart from '../charts/area-chart/AreaChart'
import TrendUp from '../../../assets/images/chart/trend-up.svg'
import TrendDown from '../../../assets/images/chart/trend-down.svg'
import { IChartData, ISingleAsset } from '../../../common/types/assets'
import { useStyles } from '../../../pages/home/styles'

interface FavoriteAssetCardProps {
    element: IChartData
}

const FavoriteAssetCard: React.FC<FavoriteAssetCardProps> = ({ element }) => {
    const classes = useStyles()

    let currentPrice = 0
    let changePrice = 0

    element.singleAsset.forEach((asset: ISingleAsset) => {
        currentPrice = asset.current_price
        changePrice = asset.price_change_percentage_24h
    })

    return (
        <Grid item xs={12} sm={6} lg={6} key={element.name}>
            <Grid container className={classes.topCardItem}>
                <Grid item xs={12} sm={12} lg={4}>
                    <h3 className={classes.assetName}>{element.name}</h3>
                    <div className={classes.itemDetails}>
                        <h3 className={classes.cardPrice}>${currentPrice}</h3>
                        <Box
                            className={
                                changePrice > 0
                                    ? `${classes.priceTrend} ${classes.trendUp}`
                                    : `${classes.priceTrend} ${classes.trendDown}`
                            }
                        >
                            {changePrice > 0 ? (
                                <img src={TrendUp} alt="TrendUp" />
                            ) : (
                                <img src={TrendDown} alt="TrendDown" />
                            )}
                            <span>{Number(changePrice).toFixed(2)}%</span>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} lg={8}>
                    <AreaChart data={element.price_chart_data} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FavoriteAssetCard
