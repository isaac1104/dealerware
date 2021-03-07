import React from 'react';
import Navbar from './Navbar/Navbar';
import Location from './Location';
import SearchBar from './SearchBar/SearchBar';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.container}>
      <Navbar />
      <SearchBar />
      <Location />
    </div>
  </div>
);

export default App;
