import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addDays, endOfDay } from 'date-fns';

export default function CalendarDatePicker(props) {
  const [value, setValue] = React.useState(null);
  const today = endOfDay(new Date());
  let allowedDays = addDays(today, 120);

    if (props.set==='start'){
        allowedDays = today;
    }
    
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Choose a date"
      value={value}
        minDate={allowedDays}
      onChange={(newValue) => {
        setValue(newValue);
        console.log(newValue)
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
  );
}