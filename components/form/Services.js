import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'

const services = {

}



export default function Services({ services }) {
    return (
        <>
            { Object.keys(services).map((name) => {
                return (
                    <Accordion sx={{ minWidth: '80%' }} color="secondary">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {name}
                        </AccordionSummary>
                        <AccordionDetails>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={name}
                                name="service"
                            >
                                {services[name].map((service) => {
                                    return(
                                        <FormControlLabel value={service} control={<Radio />} label={service} />
                                    )

                                })}
                            </RadioGroup>
                        </AccordionDetails>
                            
                        
                    </Accordion>
                    )
                }) }
        </>
    )
}
