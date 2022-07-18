import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'


export default function Employee({ employees }) {
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
                                <strong>{"Length of Experience: "}</strong>
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
