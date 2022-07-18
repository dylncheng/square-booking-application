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



export default function Services() {
    return (
        <>
            <Accordion sx={{ minWidth: '80%' }} color="secondary">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {"Men's"}
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Perm" />
                        <FormControlLabel value="male" control={<Radio />} label="Haircut" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
