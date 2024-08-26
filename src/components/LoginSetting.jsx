import { Box, TextField } from '@mui/material';

export default function DLoginSetting({ userData, setUserData }) {

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
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
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

            <TextField id="password" label="Password" type='password'
                variant="standard"
                size='small'
                sx={{ width: '80%' }}

                value={userData.password}
                onChange={handleInputChange}
            />
        </Box>
    );
};