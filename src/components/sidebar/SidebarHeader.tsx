import { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { ChevronLeftOutlined } from '@mui/icons-material'
import FlexBetween from '../flex-between/FlexBetween'
import Logo from '../../assets/images/sidebar/logo-demo.svg'
import { useStyles } from './styles'

interface SidebarHeaderProps {
    isNonMobile: boolean
    setIsOpen: (isOpen: boolean) => void
}

const SidebarHeader: FC<SidebarHeaderProps> = ({
    isNonMobile,
    setIsOpen,
}): JSX.Element => {
    const classes = useStyles()

    return (
        <Box>
            <FlexBetween>
                <Box className={classes.brand}>
                    <img src={Logo} alt="Logo" />
                    <Typography variant="h3" className={classes.brandTitle}>
                        TaCrypto
                    </Typography>
                </Box>
                {!isNonMobile && (
                    <IconButton onClick={() => setIsOpen(false)}>
                        <ChevronLeftOutlined />
                    </IconButton>
                )}
            </FlexBetween>
        </Box>
    )
}

export default SidebarHeader
