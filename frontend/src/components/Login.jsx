import React from "react";
import axios from 'axios';
import { Box, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { FormControl, InputLabel, Input } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as LinkRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = React.useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setLoginData({ ...loginData, [id]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const reponse = await axios.post('http://localhost:3000/', loginData);
            localStorage.setItem('token', reponse.data.token);
            navigate('/profile');
        }
        catch (e) { console.error(e) };
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1vw',
                marginTop: '10vh',
                height: '40vh',
                minHeight: '200px',
            }}
        >

            <TextField id="username" label="Username"
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={loginData.username}
                onChange={handleInputChange}
            />

            <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={handleInputChange}

                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
            />
            </FormControl>

            <Button variant="contained" m={20}
                sx={{ width: '80%', marginTop: '4vh' }}
                onClick={handleLogin}
            >
                Login
            </Button>

            <LinkRouter to="/singup">Don't have an account? Sing up</LinkRouter>
        </Box>
    );
};