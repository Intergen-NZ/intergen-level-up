import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import * as _ from 'lodash';

import Session from '../components/session/session';
import Tags from '../components/tags/tags';
import Sidebar from '../components/sidebar/sidebar';

import styles from './index.module.css';

class Index extends React.Component {
	constructor(props) {
		super(props);

        this.getTalks = this.getTalks.bind(this);
		this.getSessions = this.getSessions.bind(this);
	}

    getTalks() {
        const pages = this.props.route.pages;
        return pages.filter(page => page.path.indexOf('/talks/') === 0);
    }

    getSessions() {
        const talks = this.getTalks();

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
	            <Sidebar talks={this.getTalks()} />

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
