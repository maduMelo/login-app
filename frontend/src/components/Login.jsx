import React from "react";
import axios from 'axios';
import { Box, Button, TextField, Link } from "@mui/material";
import { Link as LinkRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = React.useState({ username: '', password: '' });

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
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
        >
        
            <TextField id="username" label="Username"
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={loginData.username}
                onChange={handleInputChange}
            />

            <TextField id="password" label="Password" type='password'
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={loginData.password}
                onChange={handleInputChange}
            />

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