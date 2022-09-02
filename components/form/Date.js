import { useEffect } from 'react'
import moment from 'moment';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Card, Grid, TextField } from '@mui/material';
import { useState } from 'react';


export default function Date({ date, setDate, time, setTime}) {
	const [dateList, setDateList] = useState([])

	const handleTimeSelect = (d) => {
		setTime(d);
	}

	useEffect(() => {
		async function fetchData() {
			// You can await here
			let response = await fetch(`/api/searchAvailability?date=${date.format("YYYY-MM-DD")}&teamMemberId=TMXnofIHkl-b_7M3&locationId=LSAFKQJGB2MYG&serviceVariationId=MD7WR3TFGCLHPKF62OTMWBIL`);
			let data = await response.json();
			setDateList(data.availabilities.map((d) => {
				return d.startAt;
			}))
			// ...
		}
		fetchData();

	}, [date])

	return (
		<>
			<DatePicker
				label="Date"
				value={date}
				onChange={(newDate) => {
					setDate(newDate);
				}}
				minDate={moment()}
				maxDate={moment().add(1, 'months')}
				renderInput={(params) => <TextField {...params} />}
			/>
			<Grid container spacing={2} mt="3rem">
				{
					dateList.map((d, index) => {
						return (
							<Grid item xs={4}>
								<Card onClick={() => handleTimeSelect(moment(d))}>{moment(d).format('HH:mm')}</Card>
							</Grid>
						);
						
					})
				}
			</Grid>
		</>
	)
}
