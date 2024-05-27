import { useStyles } from './styles'
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material'
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import FlexBetween from '../flex-between'
import { navMenu } from '../../common/moks/navigate'
import Logo from '../../assets/images/sidebar/logo-demo.svg'
import { ISidebarProps } from '../../common/types/sidebar'

const SidebarComponent: FC<ISidebarProps> = (
    props: ISidebarProps
): JSX.Element => {
    const [active, setActive] = useState('')
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props
    const classes = useStyles()
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const renderNavMenu = navMenu.map((element) => {
        return (
            <ListItem key={element.id}>
                <ListItemButton
                    onClick={() => navigate(`${element.path}`)}
                    className={
                        active === element.path
                            ? `${classes.navItem} ${classes.active}`
                            : classes.navItem
                    }
                >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText>
                        <Typography variant={'body1'}>
                            {element.name}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Box component="nav">
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="LogoImage" />
                                    <Typography
                                        variant="h1"
                                        className={classes.brandTitle}
                                    >
                                        Demo
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>{renderNavMenu}</List>
                    </Box>
                    <Box width="100%">
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}
export default SidebarComponent
