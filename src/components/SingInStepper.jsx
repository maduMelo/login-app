import React, { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PersonalInfo from './PersonalInfo';

const steps = ['Informações Pessoais', 'Endereço', 'Detalhes de Login'];

function StepContent({ step }) {
    switch (step) {
        case 0:
            return <PersonalInfo />;
        case 1:
            return <Typography>Formulário de Endereço</Typography>;
        case 2:
            return <Typography>Formulário de Detalhes de Login</Typography>;
        default:
            return <Typography>Passo desconhecido</Typography>;
    };
};

export default function SingInStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ mt: 4}}>
                {activeStep === steps.length ? (
                    <Box>
                        <Typography>Cadastro concluído com sucesso!</Typography>
                        <Button onClick={handleReset}>Clear</Button>
                    </Box>
                ) : (
                    <Box>
                        <StepContent step={activeStep} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
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