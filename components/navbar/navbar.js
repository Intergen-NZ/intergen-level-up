import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import logo from './logo.png';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.wrap}>
            <div className={styles.container}>
                <Link to={prefixLink('/')} className={styles.logo}>
                    <img src={logo} />
                    <h1>/level-up</h1>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;