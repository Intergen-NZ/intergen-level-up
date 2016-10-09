import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to={prefixLink('/')}>Gatsby!!!</Link>
        </nav>
    );
};

export default Navbar;