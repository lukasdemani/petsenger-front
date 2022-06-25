import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addDays, endOfDay } from 'date-fns';
import { useContext } from 'react';
import FlightContext from '../contexts/FlightContext';
import { format } from 'date-fns';

export default function CalendarDatePicker(props) {
  const [date, setDate] = React.useState(null);
  const today = endOfDay(new Date());
  const { flightData, setFlightData } = useContext(FlightContext);
  let allowedDays = addDays(today, 120);

  if (props.set==='start'){
      allowedDays = today;
  }
    
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Choose a date"
        value={date}
        minDate={allowedDays}
        onChange={(newValue) => {
          setDate(newValue);
          setFlightData({ ...flightData, dateDeparture: format(newValue, 'yyyy-MM-dd')})
          console.log(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="yyyy-MM-dd"
      />
    </LocalizationProvider>
  );
}