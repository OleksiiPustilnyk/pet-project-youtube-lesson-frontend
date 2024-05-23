import { Button, TextField, Typography } from '@mui/material'
import { IPropsLogin } from '../../../common/types/auth'

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { navigate, register, errors } = props
    return (
        <>
            <Typography variant="h2" fontFamily={'Poppins'} textAlign="center">
                Authorization
            </Typography>
            <Typography
                variant="body1"
                marginBottom={3}
                fontFamily={'Poppins'}
                textAlign="center"
            >
                Enter your email and password
            </Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email', {
                    required: 'This is a required field',
                    pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
            />
            <TextField
                error={!!errors.password}
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Enter your password"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password', {
                    required: 'This is a required field',
                    minLength: 6,
                })}
            />
            <Button
                type="submit"
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    marginBottom: 2,
                    width: ' 60%',
                }}
                variant="contained"
            >
                Login
            </Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                Don't have an account?
                <span
                    className="incidingText"
                    onClick={() => navigate('/register')}
                >
                    Registration
                </span>
            </Typography>
        </>
    )
}
export default LoginPage
