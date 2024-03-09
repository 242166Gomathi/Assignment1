import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f2f2f2' },
    paper: { padding: theme.spacing(4), width: '100%', maxWidth: '400px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' },
}));

const Register = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (redirectToLogin) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [redirectToLogin, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
        } else if (!emailRegex.test(email)) {
            setError('Invalid email address');
        } else if (password.length < 6) {
            setError('Password should be at least 6 characters long');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setIsRegistered(true);
            setRedirectToLogin(true);
        }
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                    Register
                </Typography>
                {isRegistered ? (
                    <Box textAlign="center">
                        <Typography variant="body1" gutterBottom>
                            Registration successful! Redirecting to login...
                        </Typography>
                    </Box>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField label="First Name" variant="outlined" fullWidth margin="normal" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Last Name" variant="outlined" fullWidth margin="normal" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </Grid>
                        </Grid>
                        <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField label="Confirm Password" variant="outlined" fullWidth margin="normal" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {error && (
                            <Typography variant="body2" color="error" gutterBottom>
                                {error}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Register
                        </Button>
                    </form>
                )}
            </Paper>
        </div>
    );
};

export default Register;
