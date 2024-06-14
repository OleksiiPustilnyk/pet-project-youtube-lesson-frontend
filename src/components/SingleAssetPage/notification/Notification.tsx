import { FC } from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'

interface NotificationProps {
    open: boolean
    severity: AlertColor
    error: boolean
    onClose: () => void
}

const Notification: FC<NotificationProps> = ({
    open,
    severity,
    error,
    onClose,
}) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert severity={severity} sx={{ width: '100%' }}>
                {!error ? 'Success!' : 'Oops'}
            </Alert>
        </Snackbar>
    )
}

export default Notification
