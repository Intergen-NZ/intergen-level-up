import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const PageTemplate = ({ children }) => {
    return (
        <div>
            <Helmet title={config.siteTitle} />

            <Headroom>
                <Link to={prefixLink('/')}>Gatsby!!!</Link>
            </Headroom>

            { children }
        </div>
    );
};

PageTemplate.propTypes = {
    children: PropTypes.object.isRequired
};

export default PageTemplate;