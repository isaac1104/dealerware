import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import styles from './Footer.module.css';

const menu = [
  { title: 'Careers', href: 'https://www.silvercar.com/careers' },
  { title: 'Press', href: 'https://www.silvercar.com/press' },
  {
    title: 'Terms',
    href:
      'https://support.silvercar.com/hc/en-us/articles/204790284-Terms-of-Use',
  },
  {
    title: 'Privacy',
    href:
      'https://support.silvercar.com/hc/en-us/articles/204791464-Privacy-Policy',
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <Typography variant='caption'>
          Silvercar by Audi. All rights reserved. © Copyright 2020
        </Typography>
        <div className={styles.contentRight}>
          {menu.map(({ title, href }) => (
            <Typography
              key={title}
              className={styles.menuTitle}
              variant='caption'
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

export default Footer;
