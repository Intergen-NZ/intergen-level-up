import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './talk.module.css';

const Talk = ({ path, data }) => {
	// TODO(AM): Pull this out & write some tests lol.
	let summary = data.description;
	if(summary.length > 250) {
		const postSummaryDescription = summary.substring(250, summary.length);
		summary = summary.substring(0, postSummaryDescription.indexOf(' ') + 250) + '...';
	}

	// TODO(AM): Pull out tags into a dumb component.
	return (
		<div className={styles.root}>
			<Link to={prefixLink(path)}><h6 className={styles.title}>{data.title}</h6></Link>
            <div>
            	<span>{data.speaker}</span>
            </div>
			<p className={styles.summary}>{summary}</p>

			<ul className={styles.tags}>
				{data.tags.map(tag => <li className={styles.tag}><Link to={prefixLink('/')}>{tag}</Link></li>)}
			</ul>
		</div>
	);
};

Talk.propTypes = {
	data: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired
};

export default Talk;