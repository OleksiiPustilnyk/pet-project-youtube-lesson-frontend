import { FC } from 'react'
import { AppBar, Grid, Toolbar } from '@mui/material'
import { useStyles } from './styles'
import FlexBetween from '../flex-between/FlexBetween'
import { ITopBarProps } from '../../common/types/top-bar'
import ThemeSwitcherComponent from '../UI/theme-switcher/ThemeSwitcherComponent'
import SearchBarComponent from '../UI/search-bar/SearchBarComponent'
import { useAppSelector } from '../../utils/hook'
import MenuButton from './MenuButton'
import UserGreeting from './UserGreeting'

const TopBarComponent: FC<ITopBarProps> = (
    props: ITopBarProps
): JSX.Element => {
    const classes = useStyles()
    const { setIsOpen, isOpen, isNonMobile } = props
    const { user } = useAppSelector((state) => state.auth.user)

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
                            <UserGreeting user={user} />
                        </FlexBetween>
                    </Grid>
                    {isNonMobile && (
                        <Grid
                            display="flex"
                            justifyContent="flex-end"
                            item
                            sm={9}
                            lg={9}
                        >
                            <ThemeSwitcherComponent />
                            <SearchBarComponent />
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default TopBarComponent
