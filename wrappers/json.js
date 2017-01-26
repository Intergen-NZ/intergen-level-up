import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import styles from './json.module.css';

class JsonWrapper extends React.Component {
	render() {
		const data = this.props.route.page.data;

		return (
			<div className={styles.root}>
				<Helmet title={`${config.siteTitle} | ${data.title} - ${data.speaker}`} />
                <h3>{data.title}</h3>
			</div>
		);
	}
}

JsonWrapper.propTypes = {
	route: React.PropTypes.object.isRequired
};

export default JsonWrapper;