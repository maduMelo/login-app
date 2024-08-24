import React from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography, TextField } from '@mui/material';

export default function PersonalInfo() {
    const [ageIsInvalid, setAgeIsInvalid] = React.useState(false);
    const [ageInstruction, setAgeInstruction] = React.useState('');

    const ageValidation = (event) => {
        const { target: { value } } = event;
        if (value < 1 || value > 117) {
            setAgeIsInvalid(true);
            setAgeInstruction('Add a valid age');
        } else {
            setAgeIsInvalid(false);
            setAgeInstruction('');
        };
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.5vw',
                marginTop: '-52vh',
                height: '40vh',
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
        >
            <TextField id="standard-basic" label="First name" variant="standard" size='small'
                sx={{ width: '80%' }}
            />
            <TextField id="outlined-basic" label="Last name" variant="standard" size='small'
                sx={{ width: '80%' }}
            />

            <TextField id="outlined-basic" label="Age" type='number' variant="standard" size='small'
                error={ageIsInvalid} 
                helperText={ageInstruction}
                onChange={ageValidation}
                sx={{ width: '80%' }}
            />
        </Box>
    );
};