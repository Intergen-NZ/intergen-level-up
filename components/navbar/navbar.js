import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import logo from './logo.png';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.root}>
            <div className={styles.brand}>
            	<Link to={prefixLink('/')} className={styles.logo}>
	            	<img src={logo} width="200" /><span>evolve</span>
	            </Link>
            </div>
        </nav>
    );
};

export default Navbar;