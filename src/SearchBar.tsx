import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { HandleFilterTextChange } from './HandleFilterTextChange';

function SearchBar({ filterText, handleFilterTextChange }: { filterText: string, handleFilterTextChange: HandleFilterTextChange }) {
  console.log(handleFilterTextChange)
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="... φ(．．)"
        inputProps={{ 'aria-label': 'search product' }}
        value={ filterText }
        onChange={ handleFilterTextChange }
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
