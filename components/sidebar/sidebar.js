import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import * as _ from 'lodash';

import Tags from '../tags/tags';

import styles from './sidebar.module.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.getTags = this.getTags.bind(this);
    }

    getTags() {
        const talks = this.props.talks;
        let tags = [];

        talks.forEach(talk => {
            tags = [...tags, ...talk.data.tags];
        });

        tags = _.uniq(tags);

        return (
            <Tags tags={tags} />
        );
    }

    render() {
        return (
            <div className={styles.root}>
                <div>
                    <h6>You what?</h6>
                    <p>What is the purpose of Intergen: Evolve? How often do we meet? Where do we meet? What are the sessions like? Encourage users to present.</p>
                    <p><Link to={prefixLink('/')}>Recurring Skype Meeting Link</Link></p>
                    <p><Link to={prefixLink('/')}>Enter talk link</Link></p>
                </div>

                <div>
                    <h6>Tags</h6>
                    { this.getTags() }
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    talks: PropTypes.array.isRequired
};

export default Sidebar;