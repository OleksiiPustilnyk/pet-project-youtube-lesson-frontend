import { Button } from '@mui/material'
import { styled } from '@mui/styles'

const AppButton = styled(Button)({
    borderRadius: 4,
    backgroundColor: '#4CAF50 !important',
    boxShadow: '0px 1px 7px #388E3C !important',
    padding: '10px 20px !important',
    color: 'white !important',
    maxWidth: 300,
    '&:hover': {
        backgroundColor: '#45a049 !important',
        boxShadow: '0px 2px 9px #2e7d32 !important',
    },
})
export default AppButton
