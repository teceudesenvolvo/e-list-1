import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function horarios() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={horas}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params}  />}
    />
  );
}


const horas = [
  { label: '09:00h as 10:00H' },
  { label: '11:00h as 12:00H'},
  { label: '12:00h as 13:00H' },
  
];