import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import Sidebar from '../components/sidebar/sidebar';
import Tags from '../components/tags/tags';
import { getTalks } from '../services/talk';

import styles from './json.module.css';

class JsonWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            talks: getTalks(this.props.route.pages)
        };

        this.buildLinkDump = this.buildLinkDump.bind(this);
    }

    buildLinkDump(links) {
        return links.map(link => {
            return (
                <li>
                    <a href={link.href} target="_blank">{link.title}</a>
                </li>
            );
        });
    }

	render() {
		const data = this.props.route.page.data;
        const linkDump = this.buildLinkDump(data.links);

		return (
			<div className={styles.root}>
				<Helmet title={`${config.siteTitle} | ${data.title} - ${data.speaker}`} />

                <Sidebar talks={this.state.talks} />

                <div className={styles.talkWrap}>
                    <div className={styles.talk}>
                        <h3 className={styles.title}>{data.title}</h3>
                        <p className={styles.meta}>
                            <span className={styles.speaker}>{data.speaker}</span>
                            <span className={styles.date}>{data.date}</span>
                        </p>

                        <p className={styles.description}>
                            {data.description}
                        </p>

                        <h6>Slide Deck</h6>
                        <a href={data.slideDeck.link} target="_blank">{data.slideDeck.link}</a>

                        { linkDump.length > 0 &&
                            <div>
                                <h6>Link Dump</h6>
                                <ul className={styles.linkDumpList}>
                                    {linkDump}
                                </ul>
                            </div>
                        }

                        <h6>Tags</h6>
                        <Tags tags={data.tags} />
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