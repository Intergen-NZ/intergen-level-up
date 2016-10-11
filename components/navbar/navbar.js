import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.navLeft}>
                    <Link to={prefixLink('/')}>Intergen: Level up</Link>
                </div>

                <div className={styles.navRight}>
                    <ul>
                        <li><Link to={prefixLink('/')}>Home</Link></li>
                        <li><Link to={prefixLink('/')}>About</Link></li>
                        <li><Link to={prefixLink('/')}>Mailing List</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;