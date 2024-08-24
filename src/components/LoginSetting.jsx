import { Box, Button, Step, StepLabel, Stepper, Typography, TextField } from '@mui/material';

export default function DLoginSetting() {
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
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
        >
            <TextField id="standard-basic" label="Username" variant="standard" size='small' sx={{ width: '80%' }} />
            <TextField id="outlined-basic" label="Email" variant="standard" size='small' sx={{ width: '80%' }} />
            <TextField id="outlined-basic" label="Password" type='password' variant="standard" size='small' sx={{ width: '80%' }} />
        </Box>
    );
};