import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/styles'

const AppLoadingButton = styled(LoadingButton)({
    borderRadius: 4,
    backgroundColor: '#4CAF50 !important',
    boxShadow: '0px 1px 7px #388E3C !important',
    padding: '10px 20px !important',
    maxWidth: 300,
    minWidth: '100px !important',
    color: '#fff !important',
    margin: '16px 0 16px !important',
    '&:hover': {
        backgroundColor: '#45a049 !important',
        boxShadow: '0px 2px 9px #2e7d32 !important',
    },
})
export default AppLoadingButton
