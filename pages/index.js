import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.getTalks = this.getTalks.bind(this);
	}

	getTalks() {
		const pages = this.props.route.pages;
		const talks = pages.filter((page) => {
			return page.path.indexOf('/talks/') === 0;
		});

		return (
			<ul>
				{ talks.map(talk => <li key={talk.path}><Link to={prefixLink(talk.path)}>{talk.data.title} - {talk.data.speaker}</Link></li>) }
			</ul>
		)
	}

	render() {
		return (
			<div>
	            <h1>Talks</h1>
	            {this.getTalks()}
	        </div>
		);
	}
}

Index.propTypes = {
    route: PropTypes.object.isRequired
};

export default Index;