import { useState } from "react"
import styles from '../../styles/landing.module.css'
import Button from '@mui/material/Button'
import { StepContent, Stepper, Step, Typography, StepLabel, Box } from "@mui/material";
import HorizontalLinearStepper from "../../components/form/HorizontalLinearStepper"
import Services from "../../components/form/Services";
import Employee from "../../components/form/Employee";
import Date from "../../components/form/Date";
import React from 'react'

const steps = ['Select a service', 'Choose a stylist', 'Choose a date', 'Choose a time', 'Summary'];

const store = {
    employees: [
        {
          name: 'Josh',
          experience: "6 years",
          description: "Josh is trained as a professional cat feeder, however his training is for naught—exemplified by his cat Peanut"
        },
        {
          name: 'Henry',
          experience: "6 years",
          description: "Josh is trained as a professional cat feeder, however his training is for naught—exemplified by his cat Peanut!"
        },
        {
          name: 'Daniel',
          experience: "2 years",
          description: "Daniel is cool"
        }
      ],
    services: {
        men: ['perm', 'haircut', 'hair color'],
        women: ['straight perm', 'blow dry', 'haircut', 'hair color']
    }
}

export default function Landing({client}) {
    const [step, setStep] = useState(1);
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return(
        <>
            {/* <nav><Typography variant="h1" componnent="h2">This is the nav!</Typography></nav> */}
            {/* <Button variant="contained" onClick={()=>setStep((prevStep) => prevStep + 1)}>Increment Step</Button> */}
            {/* eventually change this into ternary with placeholder */}
            {/* { step === 1  && <StepOne/> } 
            { step === 2 && <StepTwo/> }
            { step === 3 && <StepThree/> } */}
            {/* <HorizontalLinearStepper/> */}
            <Box sx={{ width: '80%', height: '80%'}} position="absolute" top="10%">
        
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((step, index) => {
                        return(
                            <Step key={index}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* <Button onClick={handleReset}>Reset</Button> */}
                    </Box>
                </>
            ) : (
                <>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', minWidth:'100%', marginTop:'5%' }}>
                        {steps.map((step, index) => {
                            return(
                                <React.Fragment key={index}>
                                    {index == 0 && activeStep == 0 && <Services key={index} services={store.services}/>}
                                    {index == 1 && activeStep == 1 && <Employee key={index} employees={store.employees} />}
                                    {index == 2 && activeStep == 2 && <Date key={index}/>}
                                    {activeStep == 3} 
                                </React.Fragment>
                            );

                        })}

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position:'absolute', bottom: 0, minWidth:'100%' }} >
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
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            )}
            </Box>
            
            
        </>


        
    )
}