import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getWatchlistElements } from '../../store/thunks/watchlist'
import { getTopPriceData } from '../../store/thunks/assets'
import AssetsTableComponent from '../../components/assets-table/AssetsTableComponent'
import { Grid, Typography } from '@mui/material'
import { useStyles } from './styles'

const WatchlistPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const watchlist = useAppSelector((state) => state.watchlist.assets)
    const { assets } = useAppSelector((state) => state.assets)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchlistElements())
    }, [dispatch])

    const filteredAssets = assets.filter((asset: any) =>
        watchlist.some(
            (watchlistItem: any) => watchlistItem.assetId === asset.id
        )
    )

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.watchlistHeading}>
                <Typography variant="h2" className={classes.heading}>
                    Favorites
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <AssetsTableComponent assets={filteredAssets} />
            </Grid>
        </Grid>
    )
}

export default WatchlistPage
