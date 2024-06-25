import { FC } from 'react'
import { Box, List, ListItem } from '@mui/material'
import ThemeSwitcherComponent from '../UI/theme-switcher/ThemeSwitcherComponent'
import SearchBarComponent from '../UI/search-bar/SearchBarComponent'

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
