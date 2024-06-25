import { FC } from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import { LogoutOutlined } from '@mui/icons-material'
import { useStyles } from './styles'

interface SidebarLogoutProps {
    handleLogout: () => void
}

const SidebarLogout: FC<SidebarLogoutProps> = ({
    handleLogout,
}): JSX.Element => {
    const classes = useStyles()

    return (
        <List>
            <ListItem>
                <ListItemButton
                    className={classes.navItem}
                    onClick={handleLogout}
                >
                    <ListItemIcon>
                        <LogoutOutlined />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>Logout</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default SidebarLogout
