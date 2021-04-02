import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchRounded from '@material-ui/icons/SearchRounded';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { searchLocation, clearSearch } from '../../actions';
import styles from './SearchBar.module.css';

// custom style for text field
const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      '& label.Mui-focused': {
        color: '#000000',
      },
      '& .MuiInput-underline:after': {
        borderBottom: '0.2rem solid #000000',
      },
    },
  })
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSearch = e => setSearchTerm(e.target.value);
  const handleClear = () => {
    dispatch(clearSearch());
    setSearchTerm('');
  };

  useEffect(() => {
    dispatch(searchLocation(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <TextField
      multiline
      className={`${styles.searchbar} ${classes.textField}`}
      value={searchTerm}
      label='Where are you headed?'
      placeholder='Airport or City.'
      onChange={handleSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            {search ? (
              <CloseOutlined
                className={styles.closeBtn}
                onClick={handleClear}
              />
            ) : (
              <SearchRounded />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
