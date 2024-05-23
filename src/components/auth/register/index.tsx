import { Button, TextField, Typography } from '@mui/material'
import { IPropsRegister } from '../../../common/types/auth'

const RegisterPage: React.FC<IPropsRegister> = (
    props: IPropsRegister
): JSX.Element => {
    const {
        setEmail,
        setPassword,
        setRepeatPassword,
        setFirstName,
        setUsername,
        navigate,
    } = props
    return (
        <>
            <Typography variant="h2" fontFamily={'Poppins'} textAlign="center">
                Registration
            </Typography>
            <Typography
                variant="body1"
                marginBottom={3}
                fontFamily={'Poppins'}
                textAlign="center"
            >
                Enter your registration details
            </Typography>
            <TextField
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Enter your name"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Repeat your password"
                variant="outlined"
                type="password"
                placeholder="Repeat your password"
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Button
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    marginBottom: 2,
                    width: ' 60%',
                }}
                variant="contained"
                type="submit"
            >
                Registration
            </Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                Do you have an account?
                <span
                    className="incidingText"
                    onClick={() => navigate('/login')}
                >
                    Authorization
                </span>
            </Typography>
        </>
    )
}
export default RegisterPage
