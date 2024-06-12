import { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets'
import { Box, Grid } from '@mui/material'
import { useStyles } from './styles'
import LineChart from '../../components/HomePage/charts/line-chart/LineChart'
import { IChartData, ISingleAsset } from '../../common/types/assets'
import TopPriceComponent from '../../components/HomePage/top-price/TopPriceComponent'
import FavoriteAssetCard from '../../components/HomePage/favorite-asset-card/FavoriteAssetCard'

const HomePage: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector(
        (state) => state.assets.favoriteAssets
    )
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )

    const dispatch = useAppDispatch()
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])

    const filteredArray = useMemo(() => {
        return favoriteAssets.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name)
        )
    }, [favoriteAssets])

    const filteredAssetArray = useMemo(() => {
        return assetsArray
            .slice()
            .sort((a, b) => b.current_price - a.current_price)
    }, [assetsArray])

    const fetchData = useCallback(
        (data: string[]) => {
            data.forEach((element: string) => {
                dispatch(getFavoriteAssets(element))
            })
        },
        [dispatch]
    )

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
        dispatch(getTopPriceData())
    }, [dispatch, favoriteAssetName, fetchData])

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {filteredArray.map((element: IChartData) => (
                    <FavoriteAssetCard key={element.name} element={element} />
                ))}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray} />}
                </Grid>
            </Grid>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    className={classes.topPriceRoot}
                >
                    <TopPriceComponent
                        assets={filteredAssetArray.slice(0, 6)}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomePage
