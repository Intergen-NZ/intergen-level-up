import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import * as _ from 'lodash';

import Session from '../components/session/session.js';

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
			<div>
	            {this.getSessions()}
	        </div>
		);
	}
}

Index.propTypes = {
    route: PropTypes.object.isRequired
};

export default Index;