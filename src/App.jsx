import { Container, Box } from '@mui/material';

import SingInStepper from './components/SingInStepper';


function App() {

    return (
        <Container maxWidth='md'
            sx={{
                background: 'linear-gradient(-45deg, pink 20%, Lavender 80%)',
                borderRadius: '20px',
                boxShadow: '0 0px 10px 0px gray',
                width: '40%',
                minWidth: '380px',
                minHeight: '380px',
                marginTop: '6%',
            }}
        >

            <Box padding={4} >
                <SingInStepper />
            </Box>

        </Container>
    );
};

export default App
