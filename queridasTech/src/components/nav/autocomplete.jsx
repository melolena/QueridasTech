import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Pesquise', 'Option 2'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{
          width: 500,
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            '& fieldset': {
              borderColor: '#D4D4D4',
            },
            '&:hover fieldset': {
              borderColor: '#D4D4D4',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D4D4D4',
            },
          },
          '& .MuiAutocomplete-endAdornment': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              display: 'none', // Esconde o ícone SVG
            },
            '&::after': {
              content: '"Buscar"',
              fontSize: '16px',
              color: '#8464ae',
              fontWeight: 'bold',
            },
          },
        }}
        renderInput={(params) => (
          <TextField 
            {...params} 
            placeholder="Digite sua opção"
            sx={{
              input: {
                color: '#080111', 
                fontFamily: 'Montserrat', 
                fontWeight: '200', 
                fontStyle: 'italic'
              },
            }}
          />
        )}
      />
    </div>
  );
}
