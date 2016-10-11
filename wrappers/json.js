import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

class JsonWrapper extends React.Component {
	render() {
		const data = this.props.route.page.data;

		return (
			<div>
				<Helmet title={`${config.siteTitle} | ${data.title} - ${data.speaker}`} />
				<h1>{data.title}</h1>
				<h2>{data.speaker}</h2>
                <p>{data.date}</p>
                <a href={data.slideDeck.link} target="_blank">Slide deck</a>

                <h3>Link dump</h3>
                <ul>
                    { data.links.map((link, i) => (
                        <li key={i}><a href={link.href} target="_blank">{link.title}</a></li>
                    )) }
                </ul>

                <h3>Tags</h3>
                <ul>
                { data.tags.map((tag, i) => (
                    <li key={i}><Link to={prefixLink('/')}>{tag}</Link></li>
                ))}
                </ul>
			</div>
		);
	}
}

JsonWrapper.propTypes = {
	route: React.PropTypes.object.isRequired
};

export default JsonWrapper;