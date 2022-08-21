import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'

export default function Services({ services, selectedService, setSelectedService }) {
    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="none"
                    name="service"
                    onChange={(e, value) => setSelectedService(value)}
                    value={selectedService}
                >
                { Object.keys(services).map((categoryId) => {
                    return (
                        <Accordion sx={{ minWidth: '80%', mb:"10px" }} color="secondary" key={services[categoryId].name}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                {services[categoryId].name}
                            </AccordionSummary>
                            <AccordionDetails>
                                    {Object.keys(services[categoryId].category_services).map((variationName) => {
                                        return(
                                            <Box key={services[categoryId].category_services[variationName].id}>
                                                <FormControlLabel value={services[categoryId].name + '-' + variationName} 
                                                                    control={<Radio />} label={variationName} />
                                            </Box> 
                                        )
                                    })}
                            </AccordionDetails>
                        </Accordion>
                        )
                    }) }
                </RadioGroup>
            </FormControl>
        </>
 
        
    )
}
