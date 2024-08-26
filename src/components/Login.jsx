
import { Box, Button, TextField, Link } from "@mui/material";
import { Link as LinkRouter } from 'react-router-dom';

export default function Login() {

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

            />

            <TextField id="password" label="Password" type='password'
                variant="standard"
                size='small'
                sx={{ width: '80%' }}
            />

            <Button variant="contained" m={20} sx={{ width: '80%', marginTop: '4vh' }}>Login</Button>
            <LinkRouter to="/singup">Don't have an account? Sing up</LinkRouter>
        </Box>
    );
};