import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import * as _ from 'lodash';

import Session from '../components/session/session.js';
import styles from './index.module.css';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.getSessions = this.getSessions.bind(this);
	}

    getSessions() {
        const pages = this.props.route.pages;
        let talks = pages.filter(page => page.path.indexOf('/talks/') === 0);

        let sessions = _.groupBy(talks, talk => {
            return new Date(talk.data.date);
        });

        sessions = _.sortBy(sessions, session => {
            return new Date(session[0].data.date);
        }).reverse();

        return (
            sessions.map((talks, i) => <Session key={i} number={sessions.length - i} talks={talks} />)
        );
    }

	render() {
		return (
			<div className={styles.root}>
	            <div className={styles.fixed}>
                    <div>
                    	<h6>You what?</h6>
                    	<p>What is the purpose of Intergen: Evolve? How often do we meet? Where do we meet? What are the sessions like? Encourage users to present.</p>
	                    <p><Link to={prefixLink('/')}>Recurring Skype Meeting Link</Link></p>
	                    <p><Link to={prefixLink('/')}>Enter talk link</Link></p>
                    </div>

                    <div>
                    	<h6>Tags</h6>
                    </div>
                </div>

                <div className={styles.sessionListWrap}>
                    <div className={styles.sessionList}>
                        { this.getSessions() }
                    </div>
                </div>
	        </div>
		);
	}
}

Index.propTypes = {
    route: PropTypes.object.isRequired
};

export default Index;