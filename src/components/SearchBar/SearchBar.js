import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SearchRounded from '@material-ui/icons/SearchRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import { searchLocation } from '../../actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        multiline
        className={styles.searchbar}
        label='Where are you headed'
        placeholder='Airport or City'
        InputProps={{
          startAdornment: (
            <InputAdornment position='end'>
              <SearchRounded />
            </InputAdornment>
          ),
        }}
        onChange={e => dispatch(searchLocation(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
