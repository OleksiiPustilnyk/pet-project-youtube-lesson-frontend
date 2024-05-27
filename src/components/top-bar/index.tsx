import {
    AppBar,
    Box,
    Grid,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material'
import {
    LightMode,
    DarkMode,
    Search,
    NotificationsNone,
    MenuOutlined,
} from '@mui/icons-material/'
import { ColorModeContext } from '../../theme'
import { FC, useContext } from 'react'
import { useStyles } from './styles'
import FlexBetween from '../flex-between'
import { ITopBarProps } from '../../common/types/top-bar'

const TopBarComponent: FC<ITopBarProps> = (
    props: ITopBarProps
): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const { setIsOpen, isOpen } = props

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined
                        className={classes.menuIcon}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <Typography variant="h3">Welcome Alex</Typography>
                </FlexBetween>
                <Box display="flex">
                    <Grid className={classes.iconBlock}>
                        <IconButton
                            className={classes.themeIcon}
                            onClick={colorMode.toggleColorMode}
                        >
                            {theme.palette.mode === 'dark' ? (
                                <DarkMode />
                            ) : (
                                <LightMode />
                            )}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone />
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search />
                        </IconButton>
                        <InputBase
                            className={classes.searchInput}
                            placeholder="Search"
                        />
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.root}>
        //     <Grid>Welcome Alex</Grid>
        //     <Box display="flex">
        //         <Grid
        //             onClick={colorMode.toggleColorMode}
        //             className={classes.iconBlock}
        //         >
        //             <IconButton className={classes.themeIcon}>
        //                 {theme.palette.mode === 'dark' ? (
        //                     <DarkModeIcon />
        //                 ) : (
        //                     <LightModeIcon />
        //                 )}
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNoneIcon />
        //             </IconButton>
        //         </Grid>
        //         <Grid className={classes.searchBlock}>
        //             <IconButton className={classes.searchIcon}>
        //                 <SearchIcon />
        //             </IconButton>
        //             <InputBase
        //                 className={classes.searchInput}
        //                 placeholder="Search"
        //             />
        //         </Grid>
        //     </Box>
        // </Box>
    )
}
export default TopBarComponent
