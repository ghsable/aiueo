import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { HandleFilterTextChange } from './HandleFilterTextChange';

function SearchBar({ filterText, handleFilterTextChange }: { filterText: string, handleFilterTextChange: HandleFilterTextChange }) {
  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:focus-within': {
          backgroundColor: 'white',
          outline: '#42a5f5 solid 1px'
        }
      }}
    >
      <InputBase
        autoFocus={ true }
        inputProps={{
          'aria-label': 'search product',
          'minLength': '0',
          'maxLength': '38'
        }}
        sx={{
          ml: 1,
          flex: 1
        }}
        placeholder="... φ(．．)"
        value={ filterText }
        onChange={ handleFilterTextChange }
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
