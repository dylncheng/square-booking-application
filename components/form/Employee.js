import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'
import { Box } from '@mui/system';


export default function Employee({ employees, selectedEmployee, setSelectedEmployee }) {
  return (
    <>
      <Box>
        <FormControl>
          <RadioGroup
            onChange={(e, value) => setSelectedEmployee(value)}
            value={selectedEmployee}
          >
            {
              Object.keys(employees).map((id, index) => {
                return( 
                  <Card sx={{ mb:"10px" }} key={index}>
                    <CardContent> 
                          <FormLabel></FormLabel>
                          <FormControlLabel value={id} control={<Radio />} label={
                            <>
                              <Typography>
                                <strong>{employees[id].name}</strong>
                              </Typography>
                              <Typography component="p">
                                <strong>{"Description: "}</strong>
                                {employees[id].description}
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
