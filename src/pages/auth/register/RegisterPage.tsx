import { TextField, Typography } from '@mui/material'
import { IPropsRegister } from '../../../common/types/auth'
import AppLoadingButton from '../../../components/UI/loading-button/AppLoadingButton'
import { useStyles } from '../styles'

const RegisterPage: React.FC<IPropsRegister> = (
    props: IPropsRegister
): JSX.Element => {
    const { navigate, register, errors, loading } = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign="center" fontSize={32}>
                Registration
            </Typography>
            <Typography variant="body1" marginBottom={3} textAlign="center">
                Enter your registration details
            </Typography>
            <TextField
                error={!!errors.name}
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Enter your name"
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')}
            />
            <TextField
                error={!!errors.username}
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Enter your username"
                helperText={errors.username ? `${errors.username.message}` : ''}
                {...register('username')}
            />
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
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
                {...register('password')}
            />
            <TextField
                error={!!errors.confirmPassword}
                fullWidth={true}
                margin="normal"
                label="Repeat your password"
                variant="outlined"
                type="password"
                placeholder="Repeat your password"
                helperText={
                    errors.confirmPassword
                        ? `${errors.confirmPassword.message}`
                        : ''
                }
                {...register('confirmPassword')}
            />
            <AppLoadingButton
                loading={loading}
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    width: ' 60%',
                }}
                variant="contained"
                type="submit"
            >
                Registration
            </AppLoadingButton>
            <Typography variant="body1">
                Do you have an account?
                <span
                    className={classes.incitingText}
                    onClick={() => navigate('/login')}
                >
                    Authorization
                </span>
            </Typography>
        </>
    )
}
export default RegisterPage
