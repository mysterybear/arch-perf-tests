import React from 'react';
import styles from './Footer.module.css'

const Footer = props => {
 return (
   <footer className={styles.root} {...props}>
     <p>Footer</p>
   </footer>
 );
}

export default Footer;
