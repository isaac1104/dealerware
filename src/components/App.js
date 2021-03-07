import React from 'react';
import Navbar from './Navbar/Navbar';
import Location from './Location';
import Footer from './Footer/Footer';
import styles from './App.module.css';

const App = () => (
  <>
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <Navbar />
        <Location />
      </div>
    </div>
    <Footer />
  </>
);

export default App;
