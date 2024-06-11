import { FC, useContext } from 'react'
import { Grid, IconButton, useTheme } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { ColorModeContext } from '../../theme'
import { useStyles } from './styles'

const ThemeSwitcherComponent: FC = (): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Grid className={classes.iconBlock}>
            <IconButton
                className={classes.themeIcon}
                onClick={colorMode.toggleColorMode}
            >
                {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon />
            </IconButton>
        </Grid>
    )
}
export default ThemeSwitcherComponent
