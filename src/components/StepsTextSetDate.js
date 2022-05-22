import * as React from 'react';
import CalendarDatePicker from "./DatePicker";
import { Typography, Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import cities from '../assets/cities';

export default function StepsTextSetDate(props){
    const { step } = props;
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
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
            <Stack direction='row' spacing={10} sx={{ width: '100%', height: 300 }}>
            <Autocomplete
                freeSolo
                disableClearable
                options={cities.map((option) => option)}
                sx = {{ width: 300 }}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="From"
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
                sx = {{ width: 300 }}
                options={cities.map((option) => option)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="To"
                    InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    }}
                />
                )}
            />

            <CalendarDatePicker />
            </Stack>
        )
    }   
}