import { useEffect } from 'react'
import moment from 'moment';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useState } from 'react';


export default function Date({ date, setDate, time, setTime}) {
	useEffect(() => {
		async function fetchData() {
			// You can await here
			let response = await fetch("/api/searchAvailability?year=2022&month=09&day=01&teamMemberId=TMXnofIHkl-b_7M3&locationId=LSAFKQJGB2MYG&serviceVariationId=MD7WR3TFGCLHPKF62OTMWBIL");
			console.log(response);
			// ...
		}
		fetchData();

	}, [])

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
			<TimePicker
				label="Time"
				value={time}
				onChange={(newTime) => {
				setTime(newTime);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</>
	)
}
