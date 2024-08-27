import { Container, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SingInStepper from './components/SingInStepper';
import Login from './components/Login';
import Profile from './components/Profile';

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
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/singup" element={<SingInStepper />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </Box>

        </Container>
    );
};

export default App
