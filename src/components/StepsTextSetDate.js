import * as React from 'react';
import CalendarDatePicker from "./DatePicker";
import { Typography, Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import citiesAirport from '../assets/cities';
import quoteService from '../services/quoteService';
import { useContext } from 'react';
import FlightContext from '../contexts/FlightContext';

export default function StepsTextSetDate(props){
    const { step } = props;
    const [value, setValue] = React.useState("");
    const cities = citiesAirport.citiesNames;
    const airport = citiesAirport.citiesHash;
    const { flightData, setFlightData } = useContext(FlightContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };  

    const handleFlight = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setFlightData({ ...flightData, 
            locationArrival: data.get('locationArraival'),
            locationDeparture: data.get('locationDeparture')
        });
    
        try {
            const quote = await quoteService.getQuote(flightData);
            console.log(quote.pricedIti)
        }catch (err){
            console.log(err.response.data)
        }
      };

    if (step === 0 ) {
        return (
            <Box sx={{ height: 300 }}>
                <Typography
                    variant = 'h6'
                    sx = {{
                        width: '80%',
                        marginLeft: 10
                    }}>
                    The whole process spend about 120 days. <br />
                    To make your life easier, you can tell us when you intend to move your pet
                    and we will show you when to start the process.
                    If you prefer, you can also set when you want to start the process
                    and we tell you when your pet will be allowed to travel.
                </Typography>

                <FormControl
                    sx = {{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 5
                    }}>
                    <FormLabel>Select your preference</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="trip" control={<Radio />} label="Set the travel date" />
                        <FormControlLabel value="start" control={<Radio />} label="Set the start date" />
                    </RadioGroup>
                </FormControl>
            </Box>
        )
    }

    if (step === 1) {
        
        return (
            <Box 
                sx = {{
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 7
                }}>

         
            {value==='start' ? 
                <>
                    <Typography
                        variant='h6'>
                        Select the date you want to start the process.   
                    </Typography>
                    <CalendarDatePicker set={value}/>
                </>
            :
                <>
                    <Typography
                        variant = 'h6'>
                        Select the date you intend to move your pet.<br />

                        The pet will be ready to travel in 120 days.
                        </Typography>
                    <CalendarDatePicker set={value}/>
                </>
            }
            </Box>
        )
        }

    if (step===2){
        return (
            <Box 
                display='flex'
                gap={10}
                justifyContent= 'center'
                alignItems='center'
                component="form" 
                onSubmit={handleFlight}
                height={300}
                noValidate sx={{ mt: 1 }
            }>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={cities.map((option) => option)}
                    sx = {{ width: 230 }}
                    onChange={(event, newValue) => {
                        setFlightData({ ...flightData, locationDeparture: airport[newValue] });
                        }}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="From"
                        id="locationDeparture"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />

                <Autocomplete
                    freeSolo
                    disableClearable
                    sx = {{ width: 230 }}
                    options={cities.map((option) => option)}
                    onChange={(event, newValue) => {
                        setFlightData({ ...flightData, locationArrival: airport[newValue] });
                        }}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="To"
                        id="locationArrival"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                    />
                    )}
                />
                <CalendarDatePicker setDate={setFlightData} flightData={flightData} />
            </Box>
        )
    } 
    if (step===3){
        return (
            <CircularProgress />
        )
    }  
}