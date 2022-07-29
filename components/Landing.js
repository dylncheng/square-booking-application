import { useEffect, useState } from "react"
import Button from '@mui/material/Button'
import { StepContent, Stepper, Step, Typography, StepLabel, Box, Card, CardContent } from "@mui/material";
import HorizontalLinearStepper from "./form/HorizontalLinearStepper"
import Header from "./header/Header"
import Services from "./form/Services";
import Employee from "./form/Employee";
import Date from "./form/Date";
import moment from "moment";
import React from 'react'

const steps = ['Select a service', 'Choose a stylist', 'Choose a date & time', 'Summary'];

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
          description: "Choose me—I'm Henry"
        },
        {
          name: 'Daniel',
          experience: "2 years",
          description: "Daniel is cool"
        }
      ],
    services: {
        'Men': ['Perm', 'Haircut', 'Hair Color'],
        'Women': ['Straight Perm', 'Blow dry', 'Haircut', 'Hair Color'],
        'Dogs': ['Shower', 'Standard Grooming', 'Premium Grooming'],
    }
}

export default function Landing({client}) {
    const [step, setStep] = useState(1);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            // window.localStorage.setItem("activeStep", prevActiveStep - 1);
            return prevActiveStep - 1;
        });
      };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            window.localStorage.setItem("selectedService", selectedService);
            window.localStorage.setItem("selectedEmployee", selectedEmployee);
            if(window.localStorage.getItem("selectedEmployee")) {
                window.localStorage.setItem("selectedDate", selectedDate);
                window.localStorage.setItem("selectedTime", selectedTime);
            }
            // window.localStorage.setItem("activeStep", prevActiveStep + 1);
            return prevActiveStep + 1;
        });
    };

    useEffect(() => {
        setSelectedService(window.localStorage.getItem("selectedService"));
        setSelectedEmployee(window.localStorage.getItem("selectedEmployee"));
        setActiveStep(window.localStorage.getItem("activeStep")?window.localStorage.getItem("activeStep"):0);

        if(window.localStorage.getItem("selectedDate")) {
            setSelectedDate(moment(window.localStorage.getItem("selectedDate")));
            setSelectedTime(moment(window.localStorage.getItem("selectedTime")));
        }
    }, [])

    return(
        <>
            <Header/>
            <Box sx={{ width: '80%', maxHeight: 'fit-content', minHeight:'90%'}} position="absolute" top="10%">
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
                    <Box sx={{ display:'flex', flexDirection: 'row', justifyContent:activeStep==3?'center':'space-between', marginTop:'5%', marginRight:'8%', marginLeft:'8%' }}>
                        <Box sx={{ maxWidth:'50%' }} display={activeStep == 3?'none':'block'}>
                            {steps.map((step, index) => {
                                return(
                                    <React.Fragment key={index}>
                                        {index == 0 && activeStep == 0 && <Services key={index} services={store.services} selectedService={selectedService} setSelectedService={setSelectedService}/>}
                                        {index == 1 && activeStep == 1 && <Employee key={index} employees={store.employees} selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>}
                                        {index == 2 && activeStep == 2 && <Date key={index} date={selectedDate} setDate={setSelectedDate} time={selectedTime} setTime={setSelectedTime} />}
                                        {activeStep == 3} 
                                    </React.Fragment>
                                );

                                })}
                        </Box>
                        <Card className="summary" sx={{width:activeStep==3?'50%':'35%', height:'60%'}}> 
                            <CardContent>
                                <Typography sx={{textAlign:'center', display:'block'}} variant='h6' gutterBottom>
                                    Summary
                                </Typography>
                                <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around' }} >
                                    {
                                        selectedService &&
                                        <Typography variant='p' sx={{display:'block', textAlign:'center'}} gutterBottom>
                                            Selected Service: {selectedService.split('-')[1]}
                                        </Typography>
                                    }
                                    {
                                        selectedEmployee &&
                                        <Typography variant='p' sx={{display:'block', textAlign:'center'}} gutterBottom>
                                            Selected Employee: {selectedEmployee}
                                        </Typography>
                                    }
                                    {
                                        selectedDate &&
                                        <Typography variant='p' sx={{display:'block', textAlign:'center'}} gutterBottom>
                                            Selected Date: {selectedDate.format('LL')}
                                        </Typography>
                                    }
                                    {
                                        selectedTime &&
                                        <Typography variant='p' sx={{display:'block', textAlign:'center'}} gutterBottom>
                                            Selected Time: {selectedTime.format('LT')}
                                        </Typography>
                                    }
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position:'absolute', bottom: '10%', minWidth:'100%' }} >
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} disabled={!((activeStep==0 && selectedService)||(activeStep==1 && selectedEmployee) || (activeStep==2 && selectedTime))?true:false}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
                )}
            </Box>
        </>


        
    )
}