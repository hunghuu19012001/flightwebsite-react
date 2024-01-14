import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function Select_Airport() {
  const [airport, setAirport] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAirport(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Airport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={airport}
          label="Airport"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tan Son Nhat International Airport (SGN) - Ho Chi Minh City</MenuItem>
          <MenuItem value={20}>Noi Bai International Airport (HAN) - Ha Noi Capital</MenuItem>
          <MenuItem value={30}>Da Nang International Airport (DAD) - Da Nang City</MenuItem>
          <MenuItem value={40}>Cam Ranh International Airport(CXR) - Khanh Hoa province</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

