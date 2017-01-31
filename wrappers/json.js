import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import Sidebar from '../components/sidebar/sidebar';

import styles from './json.module.css';

class JsonWrapper extends React.Component {
	render() {
		const data = this.props.route.page.data;

		return (
			<div className={styles.root}>
				<Helmet title={`${config.siteTitle} | ${data.title} - ${data.speaker}`} />

                <Sidebar talks={[]} />

                <div className={styles.talkWrap}>
                    <div className={styles.talk}>
                        <h6>{data.title}</h6>
                    </div>
                </div>
			</div>
		);
	}
}

JsonWrapper.propTypes = {
	route: React.PropTypes.object.isRequired
};

export default JsonWrapper;