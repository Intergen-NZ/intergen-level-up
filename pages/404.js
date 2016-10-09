import { prefixLink } from 'gatsby-helpers';

const PageNotFound = () => {
    return (
        <div>
            <h1>NOT FOUND</h1>

            <p>Could not find what you were looking for :(<Link to={prefixLink('/')}>Go home</Link> </p>
        </div>
    );
};