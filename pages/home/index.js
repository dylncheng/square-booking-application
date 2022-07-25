import { useEffect, useState } from "react"
import styles from '../../styles/landing.module.css'
import Button from '@mui/material/Button'
import { StepContent, Stepper, Step, Typography, StepLabel, Box, Card, CardContent } from "@mui/material";
import HorizontalLinearStepper from "../../components/form/HorizontalLinearStepper"
import Header from "../../components/header/Header"
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
        'Men': ['Perm', 'Haircut', 'Hair Color'],
        'Women': ['Straight Perm', 'Blow dry', 'Haircut', 'Hair Color']
    }
}

export default function Landing({client}) {
    const [step, setStep] = useState(1);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return(
        <>
            <Box sx={{ width: '80%', height: '80%'}} position="absolute" top="10%">
                <Header/>
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
                    <Box sx={{ display:'flex', flexDirection: 'row', justifyContent:'space-between', marginTop:'5%', marginRight:'8%', marginLeft:'8%' }}>
                        <Box sx={{ maxWidth:'50%' }}>
                            {steps.map((step, index) => {
                                return(
                                    <React.Fragment key={index}>
                                        {index == 0 && activeStep == 0 && <Services key={index} services={store.services} selectedService={selectedService} setSelectedService={setSelectedService}/>}
                                        {index == 1 && activeStep == 1 && <Employee key={index} employees={store.employees} selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>}
                                        {index == 2 && activeStep == 2 && <Date key={index}/>}
                                        {activeStep == 3} 
                                    </React.Fragment>
                                );

                                })}
                        </Box>
                        <Card className="summary" sx={{width:'35%', height:'60%'}}> 
                            <CardContent>
                                <Typography sx={{textAlign:'center', display:'block'}} variant='h6' gutterBottom>
                                    Summary
                                </Typography>
                                {
                                    selectedService &&
                                    <Typography variant='p' sx={{display:'block', textAlign:'center'}}>
                                        Selected Service: {selectedService.split('-')[1]}
                                    </Typography>
                                }
                                {
                                    selectedEmployee &&
                                    <Typography variant='p' sx={{display:'block', textAlign:'center'}}>
                                        Selected Employee: {selectedEmployee}
                                    </Typography>
                                }
                            </CardContent>
                        </Card>
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