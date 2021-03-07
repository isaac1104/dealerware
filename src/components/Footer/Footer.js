import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>Silvercar by Audi. All rights reserved. © Copyright 2020</p>
        <div className={styles.contentRight}>
          <a
            rel='noopener noreferrer'
            href='https://www.silvercar.com/careers'
            title='Careers'
          >
            <p class='MuiTypography-root MuiTypography-caption'>Careers</p>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://www.silvercar.com/press'
            title='Press'
          >
            <p class='MuiTypography-root MuiTypography-caption'>Press</p>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://support.silvercar.com/hc/en-us/articles/204790284-Terms-of-Use'
            title='Terms'
          >
            <p class='MuiTypography-root MuiTypography-caption'>Terms</p>
          </a>
          <a
            rel='noopener noreferrer'
            href='https://support.silvercar.com/hc/en-us/articles/204791464-Privacy-Policy'
            title='Privacy'
          >
            <p class='MuiTypography-root MuiTypography-caption'>Privacy</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
