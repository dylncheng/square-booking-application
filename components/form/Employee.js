import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react'
import { Box } from '@mui/system';


export default function Employee({ employeeIds, employees, selectedEmployee, setSelectedEmployee }) {
  useEffect(() => {
    console.log("employeeIds HERE:", employeeIds)
  }, [])

  return (
    <>
      <Box>
        <FormControl>
          <RadioGroup
            onChange={(e, value) => {
              setSelectedEmployee(value)
            }}
            value={selectedEmployee}
          >
            {
              employeeIds.map((id) => {
                console.log("cameron iterating over id: ", id)
                return( 
                  <Card sx={{ mb:"10px" }} key={id}>
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
