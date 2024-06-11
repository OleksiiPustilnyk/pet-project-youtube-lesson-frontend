import { FC } from 'react'
import { Typography } from '@mui/material'

interface UserGreetingProps {
    user: { firstName: string } | null
}

const UserGreeting: FC<UserGreetingProps> = ({ user }): JSX.Element => {
    return (
        <Typography variant="h3">
            Welcome {user ? `${user.firstName}` : ''}
        </Typography>
    )
}

export default UserGreeting
