import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { getNews } from '../../store/thunks/news'
import { Grid, Typography } from '@mui/material'
import { useStyles } from './styles'
import NewsBlock from '../../components/NewsPage/news-block/NewsBlock'

const NewsPage: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { news } = useAppSelector((state) => state.news)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.blockTitle}>
                <Typography variant="h2">News</Typography>
            </Grid>
            <Grid item xs={12}>
                {news.map((element: any) => (
                    <NewsBlock key={element.id} newsItem={element} />
                ))}
            </Grid>
        </Grid>
    )
}

export default NewsPage
