import { FC, useState, useEffect } from 'react'
import { Grid, Box, Typography, Link, CircularProgress } from '@mui/material'
import { useStyles } from '../../../pages/news/styles'
import BlockBg from '../../block-bg/BlockBg'
import { useInView } from 'react-intersection-observer'

interface NewsBlockProps {
    newsItem: {
        id: string
        imageurl: string
        category: string
        title: string
        body: string
        url: string
    }
}

const NewsBlock: FC<NewsBlockProps> = ({ newsItem }): JSX.Element => {
    const classes = useStyles()

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (inView) {
            const img = new Image()
            img.src = newsItem.imageurl
            img.onload = () => setLoading(false)
            img.onerror = () => setLoading(false)
        }
    }, [inView, newsItem.imageurl])

    const truncateText = (
        text: string,
        maxLines: number,
        charsPerLine: number
    ) => {
        const maxLength = maxLines * charsPerLine
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...'
        }
        return text
    }

    const maxLines = 6
    const charsPerLine = 80

    return (
        <BlockBg>
            <Grid ref={ref} container key={newsItem.id}>
                {inView &&
                    (loading ? (
                        <Grid item xs={12} className={classes.loading}>
                            <CircularProgress />
                        </Grid>
                    ) : (
                        <>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={3.5}
                                className={classes.img}
                            >
                                <img
                                    className={classes.image}
                                    src={newsItem.imageurl}
                                    alt={newsItem.category}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={8.5}>
                                <Box className={classes.newsTitle}>
                                    <Typography variant="h3">
                                        {newsItem.title}
                                    </Typography>
                                </Box>
                                <Box className={classes.newsText}>
                                    <Typography variant="body1">
                                        {truncateText(
                                            newsItem.body,
                                            maxLines,
                                            charsPerLine
                                        )}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.readMore}>
                                <Link
                                    href={newsItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read more...
                                </Link>
                            </Grid>
                        </>
                    ))}
            </Grid>
        </BlockBg>
    )
}

export default NewsBlock
