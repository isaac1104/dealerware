import React from 'react';
import Navbar from './Navbar/Navbar';
import Location from './Location';
import SearchBar from './SearchBar/SearchBar';
import Pagination from './Pagination/Pagination';

const App = () => (
  <>
    <Navbar />
    <SearchBar />
    <Location />
    <Pagination />
  </>
);

export default App;
