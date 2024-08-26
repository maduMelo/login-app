import React from 'react';
import { Box, TextField } from '@mui/material';

export default function PersonalInfo({ userData, setUserData }) {
    const [ageIsInvalid, setAgeIsInvalid] = React.useState(false);
    const [ageInstruction, setAgeInstruction] = React.useState('');

    const ageValidation = (value) => {
        if (value < 1 || value > 117) {
            setAgeIsInvalid(true);
            setAgeInstruction('Add a valid age');
            return false;
        } else {
            setAgeIsInvalid(false);
            setAgeInstruction('');
            return true;
        };
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setUserData({ ...userData, [id]: value });

        if (id === 'age') ageValidation(value);
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
                minHeight: '200px',
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
        >
            <TextField id="firstName" label="First name" variant="standard" size='small'
                sx={{ width: '80%' }}
                value={userData.firstName}
                onChange={handleInputChange}
            />
            <TextField id="lastName" label="Last name" variant="standard" size='small'
                sx={{ width: '80%' }}
                value={userData.lastName}
                onChange={handleInputChange}
            />

            <TextField id="age" label="Age" type='number' variant="standard" size='small'
                error={ageIsInvalid} 
                helperText={ageInstruction}
                onChange={handleInputChange}
                sx={{ width: '80%' }}
                value={userData.age}
            />
        </Box>
    );
};