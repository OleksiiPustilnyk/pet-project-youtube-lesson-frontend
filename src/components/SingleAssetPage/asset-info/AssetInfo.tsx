import { FC } from 'react'
import { Grid, Typography, Avatar } from '@mui/material'
import FlexBetween from '../../flex-between/FlexBetween'
import { ISingleAsset } from '../../../common/types/assets'
import { useStyles } from '../../../pages/single-asset/styles'
import AssetDetail from './AssetDetail'

interface AssetInfoProps {
    asset: ISingleAsset
}

const AssetInfo: FC<AssetInfoProps> = ({ asset }) => {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={12} className={classes.assetName}>
                <Typography variant="h1">{asset.name}</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.card}>
                <Grid className={classes.cardItem}>
                    <FlexBetween>
                        <Avatar
                            src={asset.image}
                            className={classes.assetIcon}
                        />
                        <Typography
                            variant="h2"
                            className={classes.assetSymbol}
                        >
                            {asset.symbol.toUpperCase()}
                        </Typography>
                    </FlexBetween>
                </Grid>
            </Grid>
            <AssetDetail title="Price:" value={`$ ${asset.current_price}`} />
            <AssetDetail
                title="Price change:"
                value={`$ ${asset.price_change_24h.toFixed(4)}`}
                trend={asset.price_change_percentage_24h >= 0 ? 'up' : 'down'}
            />
            <AssetDetail
                title="Price change in %:"
                value={`${asset.price_change_percentage_24h.toFixed(2)}%`}
                trend={asset.price_change_percentage_24h >= 0 ? 'up' : 'down'}
            />
        </>
    )
}

export default AssetInfo
