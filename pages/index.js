import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import * as _ from 'lodash';

import Session from '../components/session/session';
import Tags from '../components/tags/tags';
import Sidebar from '../components/sidebar/sidebar';
import { getTalks } from '../services/talk';

import styles from './index.module.css';

class Index extends React.Component {
	constructor(props) {
		super(props);

        this.state = {
            talks: getTalks(this.props.route.pages)
        };

        this.getSessions = this.getSessions.bind(this);
	}

    getSessions() {
        const talks = this.state.talks;

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
	            <Sidebar talks={this.state.talks} />

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
