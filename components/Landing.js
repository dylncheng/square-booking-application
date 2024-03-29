import { useEffect, useState } from "react"
import Button from '@mui/material/Button'
import { StepContent, Stepper, Step, Typography, StepLabel, Box, Card, CardContent, Divider, List, ListItem } from "@mui/material";
import HorizontalLinearStepper from "./form/HorizontalLinearStepper"
import Header from "./header/Header"
import Services from "./form/Services";
import Employee from "./form/Employee";
import Date from "./form/Date";
import moment from "moment";
import React from 'react'
import { app, db } from '../firebaseConfig'
import { collection, addDoc, updateDoc, doc, increment } from "firebase/firestore"; 
import { indigo, amber } from '@mui/material/colors'
import { useRouter } from "next/router";
import { ConstructionOutlined } from "@mui/icons-material";

const steps = ['Select a service', 'Choose a stylist', 'Choose a date & time', 'Summary'];
/*
'D224KQKTM5ZV2VDVLOYPBLHU': {
            category_services: {
                "Men's Haircut": {
                    id: 'N3NDUI66DKACLPV4OO64343P'
                }
            },
            name: "Men" 
        }
{
        'Men': ['Perm', 'Haircut', 'Hair Color'],
        'Women': ['Straight Perm', 'Blow dry', 'Haircut', 'Hair Color'],
        'Dogs': ['Shower', 'Standard Grooming', 'Premium Grooming'],
    }
*/

async function submitBooking(date, teamMemberId, serviceVariationId, serviceVariationVersion, locationId, customerId, durationMinutes) {
    await fetch(`/api/createBooking?date=${date}&teamMemberId=${teamMemberId}&serviceVariationId=MD7WR3TFGCLHPKF62OTMWBIL&serviceVariationVersion=1662006699658&locationId=LSAFKQJGB2MYG&customerId=141NWHDVWBGVQHY4S0T18KMMXR&durationMinutes=30`)
    console.log("yeay");
    }


function Landing({services, employees}) {
    const [step, setStep] = useState(1);
    const [activeStep, setActiveStep] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [bookableEmployees, setBookableEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
    const router = useRouter();
    let { referral } = router.query;  

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            // window.localStorage.setItem("activeStep", prevActiveStep - 1);
            return prevActiveStep - 1;
        });
      };

    const handleNext = () => {
        if (activeStep === steps.length - 2) {
            console.log("I'm calling!");
            console.log("TIME: " + selectedTime)
            console.log("HERE: " + selectedDate);
            submitBooking(selectedTime.format(), selectedEmployee);
        }
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
        // services[]
        console.log(services)
        console.log(selectedService)
        if(selectedService)
            Object.keys(services).map((categoryId) => {
                Object.keys(services[categoryId].category_services).map((variationName) => {
                    if(variationName == selectedService.split('-')[1])
                        setBookableEmployees(services[categoryId].category_services[variationName].teamMemberIds.filter(id => {
                            return Boolean(employees[id]);
                        }))
                })
            })

    }, [selectedService])

    useEffect(() => console.log("selectedEmployee: ", selectedEmployee), [selectedEmployee])

    
    useEffect(() => {
    
        console.log(referral)
        setSelectedService(window.localStorage.getItem("selectedService"));
        setSelectedEmployee(window.localStorage.getItem("selectedEmployee"));
        setActiveStep(window.localStorage.getItem("activeStep")?window.localStorage.getItem("activeStep"):0);

        if(window.localStorage.getItem("selectedDate")) {
            setSelectedDate(moment(window.localStorage.getItem("selectedDate")));
            setSelectedTime(moment(window.localStorage.getItem("selectedTime")));
        }
        console.log(router)
        // console.log(referral)

        // if(referral !== null) {
        //     const docRef = doc(db, "test_analytics", "swag dressers")
        //     console.log(router.query)
        //     updateDoc(docRef, {
        //         [referral]: increment(1)
            
        //     })
        // }
        // console.log(docRef)

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
                                        {index == 0 && activeStep == 0 && <Services key={index} services={services} selectedService={selectedService} setSelectedService={setSelectedService}/>}
                                        {index == 1 && activeStep == 1 && <Employee key={index} employeeIds={bookableEmployees} employees={employees} selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>}
                                        {index == 2 && activeStep == 2 && <Date key={index} date={selectedDate} setDate={setSelectedDate} time={selectedTime} setTime={setSelectedTime} />}
                                        {activeStep == 3} 
                                    </React.Fragment>
                                );

                                })}
                        </Box>
                        <Card className="summary" sx={{width:activeStep==3?'50%':'35%', height:'60%', bgcolor: indigo[50], borderRadius: 3, borderColor: indigo[200], border: 2, boxShadow: "none" }}> 
                            <CardContent>
                                <Typography sx={{textAlign:'left', display:'block'}} variant='h6' gutterBottom>
                                    Summary
                                </Typography>
                                <Divider sx={{ mb: 1 }}></Divider>
                                <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'space-around' }} >
                                    {/* {
                                        selectedService &&
                                            <Box sx={{ borderRadius: 1, px: 1, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Typography sx={{ mt: -0.5, fontSize: 20, px: 0.5, textAlign: 'center' }}>
                                                    {selectedService.split('-')[1]}
                                                </Typography>
                                                <Typography sx={{ fontSize: 12, color: indigo[700], bgcolor: indigo[100], borderRadius: 2, px: 0.5, width: 'fit-content', height: 'fit-content' }}>
                                                    Service
                                                </Typography>
                                            </Box>
                                    } */}
                                    {
                                        selectedService &&
                                            <Box sx={{ borderRadius: 1, py: 1 }}>
                                                <Typography sx={{ fontSize: 12, color: indigo[700], mx: 0.5 }}>
                                                    Service
                                                </Typography>
                                                <Typography sx={{ fontSize: 18, bgcolor: amber[50], borderRadius: 2, px: 1, width: 'fit-content', mt: 0.5 }}>
                                                    {selectedService.split('-')[1]}
                                                </Typography>
                                            </Box>
                                    }
                                    {
                                        selectedService && selectedEmployee &&
                                            <Box sx={{ borderRadius: 1, py: 1 }}>
                                                <Typography sx={{ fontSize: 12, color: indigo[700], mx: 0.5 }}>
                                                    Employee
                                                </Typography>
                                                <Typography sx={{ fontSize: 18, bgcolor: amber[50], borderRadius: 2, px: 1, width: 'fit-content', mt: 0.5 }}>
                                                    {employees[selectedEmployee].name}
                                                </Typography>
                                            </Box>
                                    }
                                    {
                                        selectedService && selectedDate &&
                                            <Box sx={{ borderRadius: 1, py: 1 }}>
                                                <Typography sx={{ fontSize: 12, color: indigo[700], mx: 0.5 }}>
                                                    on
                                                </Typography>
                                                <Typography sx={{ fontSize: 18, bgcolor: amber[50], borderRadius: 2, px: 1, width: 'fit-content', mt: 0.5 }}>
                                                    {selectedDate.format('LL')}
                                                </Typography>
                                            </Box>
                                    }
                                    {
                                        selectedService && selectedDate &&
                                            <Box sx={{ borderRadius: 1, py: 1 }}>
                                                <Typography sx={{ fontSize: 12, color: indigo[700], mx: 0.5 }}>
                                                    at
                                                </Typography>
                                                <Typography sx={{ fontSize: 18, bgcolor: amber[50], borderRadius: 2, px: 1, width: 'fit-content', mt: 0.5 }}>
                                                    {selectedTime.format('LT')}
                                                </Typography>
                                            </Box>
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

export default Landing;