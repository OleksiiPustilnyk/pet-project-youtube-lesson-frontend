import { Box, Grid, Tab, Tabs, useTheme } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import TabPanel from '../../components/tab-panel'
import { tabProps } from '../../utils/helpers'
import { tokens } from '../../theme'
import { useStyles } from './styles'
import SettingsPersonalInfoComponent from '../../components/settings-personal-info'
import { useAppDispatch } from '../../utils/hook'
import { getPublicUser } from '../../store/thunks/auth'
import ChangePasswordComponent from '../../components/change-password'
import DeleteUserComponent from '../../components/delete-user'

const SettingsPage: FC = (): JSX.Element => {
    const [value, setvalue] = useState(0)
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()

    useEffect(() => {
        dispatch(getPublicUser())
    }, [dispatch])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setvalue(newValue)
    }

    return (
        <Grid className={classes.root}>
            <Box className={classes.tabsWrapper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.green,
                        },
                    }}
                >
                    <Tab label="Personal data" {...tabProps(0)} />
                    <Tab label="Change password" {...tabProps(1)} />
                    <Tab label="Delete account" {...tabProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SettingsPersonalInfoComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChangePasswordComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DeleteUserComponent />
            </TabPanel>
        </Grid>
    )
}
export default SettingsPage
