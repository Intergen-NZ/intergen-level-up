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
				
			</div>
		);
	}
}

JsonWrapper.propTypes = {
	route: React.PropTypes.object.isRequired
};

export default JsonWrapper;