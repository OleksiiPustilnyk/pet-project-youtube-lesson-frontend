import { FC, useEffect, useState } from 'react'
import { Box, Drawer, useTheme } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStyles } from './styles'
import { ISidebarProps } from '../../common/types/sidebar'
import SidebarHeader from './SidebarHeader'
import SidebarNavMenu from './SidebarNavMenu'
import SidebarLogout from './SidebarLogout'
import SidebarFooter from './SidebarFooter'

const SidebarComponent: FC<ISidebarProps> = (
    props: ISidebarProps
): JSX.Element => {
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props
    const [active, setActive] = useState('')
    const classes = useStyles()
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const handleLogout = () => {
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('token')
        navigate('/login')
    }

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
                    <Box>
                        <Box className={classes.navBlock}>
                            <SidebarHeader
                                isNonMobile={isNonMobile}
                                setIsOpen={setIsOpen}
                            />
                            <SidebarNavMenu active={active} />
                            <SidebarFooter isNonMobile={isNonMobile} />
                        </Box>
                        <SidebarLogout handleLogout={handleLogout} />
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}

export default SidebarComponent
