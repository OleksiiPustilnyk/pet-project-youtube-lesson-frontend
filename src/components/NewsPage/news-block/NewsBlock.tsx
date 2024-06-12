import { FC } from 'react'
import { Grid, Box, Typography, Link } from '@mui/material'
import { useStyles } from '../../../pages/news/styles'

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

    return (
        <Grid container className={classes.newsBlock} key={newsItem.id}>
            <Grid item xs={12} md={5} lg={3.5} className={classes.img}>
                <img src={newsItem.imageurl} alt={newsItem.category} />
            </Grid>
            <Grid item xs={12} md={7} lg={8.5}>
                <Box className={classes.newsTitle}>
                    <Typography variant="h3">{newsItem.title}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">{newsItem.body}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.readMore}>
                <Typography variant="h4">
                    <Link href={newsItem.url}>Read more...</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NewsBlock
