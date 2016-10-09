import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const Index = ({ route }) => {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to={prefixLink('/css-modules/')}>Example page with CSS modules</Link>
        </div>
    );
}

Index.propTypes = {
    route: PropTypes.object.isRequired
};

export default Index;