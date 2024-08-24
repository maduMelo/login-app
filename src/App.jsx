import { useState } from 'react'

import { Container, Box } from '@mui/material';

import SingInStepper from './components/SingInStepper';


function App() {

    return (
        <Container maxWidth='md'
            sx={{
                bgcolor: 'Azure',
            }}
        >

            <Box padding={4} >
                <SingInStepper />
            </Box>

        </Container>
    );
};

export default App
