import { FC } from 'react'
import { Box, List, ListItem } from '@mui/material'
import ThemeSwitcherComponent from '../theme-switcher/ThemeSwitcherComponent'
import SearchBarComponent from '../search-bar/SearchBarComponent'

interface SidebarFooterProps {
    isNonMobile: boolean
}

const SidebarFooter: FC<SidebarFooterProps> = ({
    isNonMobile,
}): JSX.Element => {
    return (
        <Box>
            <List>
                {!isNonMobile && (
                    <ListItem>
                        <SearchBarComponent />
                    </ListItem>
                )}
                {!isNonMobile && (
                    <ListItem>
                        <Box>
                            <ThemeSwitcherComponent />
                        </Box>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default SidebarFooter
