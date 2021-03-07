import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const menu = [
  { title: 'How it Works', href: 'https://www.silvercar.com/how-it-works' },
  { title: 'Locations', href: 'https://www.silvercar.com/car-rentals/' },
  { title: 'Vehicles', href: 'https://www.silvercar.com/fleet/' },
  { title: 'Help' },
  { title: 'Log In', href: 'https://app.silvercar.com/login' },
  { title: 'Sign Up', href: 'https://app.silvercar.com/signup' },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href='https://www.silvercar.com'>
        <img src={logo} alt='logo' className={styles.logo} />
      </a>
      <div className={styles.menuContainer}>
        <div className={styles.menuContainer}>
          {menu.map(({ title, href }) => (
            <Typography
              key={title}
              className={styles.menuTitle}
              variant='body2'
            >
              <Link href={href} className={styles.link} underline='none'>
                {title}
              </Link>
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
