import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';
import Typography from '@material-ui/core/Typography';

const menu = [
  { title: 'How it Works' },
  { title: 'Locations' },
  { title: 'Vehicles' },
  { title: 'Help' },
];

const socialMenu = [{ title: 'Log In' }, { title: '|' }, { title: 'Sign Up' }];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href='https://www.silvercar.com'>
        <img src={logo} alt='logo' className={styles.logo} />
      </a>
      <div className={styles.menuContainer}>
        <div className={styles.menuContainer}>
          {menu.map(({ title }) => (
            <span key={title} className={styles.menu}>
              <Typography>{title}</Typography>
            </span>
          ))}
        </div>
        <div className={styles.menuContainer}>
          {socialMenu.map(({ title }) => (
            <span key={title} className={styles.menu}>
              <Typography>{title}</Typography>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
