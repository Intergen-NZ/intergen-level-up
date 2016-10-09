import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Navbar from '../components/navbar/navbar.js';

const PageTemplate = ({ children }) => {
    return (
        <div>
            <Helmet title={config.siteTitle} />

            <Navbar />

            { children }
        </div>
    );
};

PageTemplate.propTypes = {
    children: PropTypes.object.isRequired
};

export default PageTemplate;