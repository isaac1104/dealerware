import React from 'react';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import Location from './Location';
import Footer from './Footer/Footer';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.container}>
      <Navbar />
      <SearchBar />
      <Location />
      <Footer />
    </div>
  </div>
);

export default App;
