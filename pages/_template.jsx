import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import styles from './template.module.css';
import Navbar from '../components/navbar/navbar.js';

class PageTemplate extends React.Component {
	render() {
		return (
			<div>
				<Helmet title={config.siteTitle} />
	            <Navbar />
	            <div className={styles.page}>
	            	{ this.props.children }
	            </div>
			</div>
		);
	}
}

PageTemplate.propTypes = {
    children: PropTypes.object.isRequired
};

export default PageTemplate;