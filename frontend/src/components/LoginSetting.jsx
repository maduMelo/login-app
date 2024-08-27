import React from 'react';
import { Box, TextField } from '@mui/material';
import { InputAdornment, IconButton } from "@mui/material";
import { FormControl, InputLabel, Input } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function DLoginSetting({ userData, setUserData }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setUserData({ ...userData, [id]: value });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1vw',
                marginTop: '-52vh',
                height: '40vh',
                minHeight: '200px',
            }}
        >
            <TextField id="username" label="Username"
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={userData.username}
                onChange={handleInputChange}
            />

            <TextField id="email" label="Email"
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={userData.email}
                onChange={handleInputChange}
            />

            <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={userData.password}
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
        </Box>
    );
};