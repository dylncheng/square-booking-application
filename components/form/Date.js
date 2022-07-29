import React from 'react'
import moment from 'moment';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Date({ date, setDate, time, setTime}) {

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
