import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'
import { Box } from '@mui/system';

const employees = [
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
]


export default function Employee() {
  return (
    <>
      <Box>
        <FormControl>
          <RadioGroup>
            {
              employees.map((employee, index) => {
                return( 
                  <Card sx={{ mb:"10px" }} key={index}>
                    <CardContent> 
                          <FormLabel></FormLabel>
                          <FormControlLabel value={employee.name} control={<Radio />} label={
                            <>
                              <Typography>
                                <strong>{"Length of Experiennce: "}</strong>
                                {employee.experience}
                              </Typography>
                              <Typography component="p">
                                <strong>{"Description: "}</strong>
                                {employee.description}
                              </Typography>
                            </>
                          }>
                          </FormControlLabel>
                    </CardContent>
                  </Card>
                );
              })
            }
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}
