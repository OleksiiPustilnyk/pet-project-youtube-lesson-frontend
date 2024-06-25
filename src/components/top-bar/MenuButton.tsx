import { FC } from 'react'
import { MenuOutlined } from '@mui/icons-material'
import { useStyles } from './styles'

interface MenuButtonProps {
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
}

const MenuButton: FC<MenuButtonProps> = ({
    setIsOpen,
    isOpen,
}): JSX.Element => {
    const classes = useStyles()
    return (
        <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
        />
    )
}

export default MenuButton
