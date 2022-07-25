import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Date() {
	const [value, setValue] = useState(1);

	return (
		<>
			<DateTimePicker
				renderInput={(props) => <TextField {...props} />}
				label="DateTimePicker"
				value={value}
				onChange={(newValue) => {
				setValue(newValue);
				}}
			/>
		</>
	)
}
