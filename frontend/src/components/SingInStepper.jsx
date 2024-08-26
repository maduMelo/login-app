import React, { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

import PersonalInfo from './PersonalInfo';
import Details from './Details';
import LoginSetting from './LoginSetting';

import kitty from '../assets/kitty.gif';

const steps = ['General', 'Profile', 'Account'];

function StepContent({ step, userData, setUserData }) {
    switch (step) {
        case 0:
            return <PersonalInfo userData={userData} setUserData={setUserData} />;
        case 1:
            return <Details userData={userData} setUserData={setUserData} />;
        case 2:
            return <LoginSetting userData={userData} setUserData={setUserData} />;
        default:
            return <Typography>Passo desconhecido</Typography>;
    };
};

export default function SingInStepper() {
    const [userData, setUserData] = useState({
        firstName: '', lastName: '', age: null,
        moviesPerWeek: null, platforms: [], genres: [],
        username: '', email: '', password: '',
    });
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        console.log(userData);
        setActiveStep(0);
    };

    return (
        <Box 
            sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '65vh',
                minHeight: '320px',
                //bgcolor: 'rgba(255, 255, 255, 0.5)',
                
            }}
        >
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box>
                {activeStep === steps.length ? (
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
                        <Box sx={{ width: '40%', height: '70%', display: 'flex' }} ><img src={kitty} alt="Kitty" /></Box>
                        <Typography>Cadastro concluído com sucesso!</Typography>
                        <LinkRouter to="/">Login In</LinkRouter>
                    </Box>
                ) : (
                    <Box>
                        <StepContent step={activeStep} userData={userData} setUserData={setUserData} />
                        <Box sx={{ display: 'flex', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};