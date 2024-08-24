import { Box, Button, Step, StepLabel, Stepper, Typography, TextField } from '@mui/material';



export default function PersonalInfo() {
    return (
        
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1vw',
          }}
        >
            <TextField id="outlined-basic" label="First name" variant="outlined" size='small' />
            <TextField id="outlined-basic" label="Last name" variant="outlined" size='small' />
            <TextField id="outlined-basic" label="Age" type='number' variant="outlined" size='small' error helperText="Incorrect entry." />
        </Box>
    );
};