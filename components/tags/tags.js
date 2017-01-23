import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './tags.module.css';

const Tags = ({tags}) => {
    return (
        <ul className={styles.root}>
            {tags.map((tag, i) => 
                <li key={i} className={styles.tag}>
                    <Link to={prefixLink('/')}>{tag}</Link>
                </li>
            )}
        </ul>
    );
};

Tags.propTypes = {
    tags: PropTypes.array.isRequired
};

export default Tags;