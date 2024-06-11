import { FC } from 'react'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { navMenu } from '../../common/moks/navigate'
import { useStyles } from './styles'

interface SidebarNavMenuProps {
    active: string
}

const SidebarNavMenu: FC<SidebarNavMenuProps> = ({ active }): JSX.Element => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <List className={classes.navList}>
            {navMenu.map((element) => (
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
            ))}
        </List>
    )
}

export default SidebarNavMenu
