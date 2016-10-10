import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class JsonWrapper extends React.Component {
	render() {
		const data = this.props.route.page.data;

		return (
			<div>
				<Helmet title={`${config.siteTitle} | ${data.title} - ${data.speaker}`} />
				<h1>{data.title}</h1>
				<h2>{data.speaker}</h2>
				<p>{data.description}</p>
			</div>
		);
	}
}

JsonWrapper.propTypes = {
	route: React.PropTypes.object.isRequired
};

export default JsonWrapper;