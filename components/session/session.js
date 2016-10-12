import React, { PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import styles from './session.module.css';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.getSessionTitle = this.getSessionTitle.bind(this);
    }

    getSessionTitle() {
        const talk = this.props.talks[0];
        const sessionDate = moment(talk.data.date).format('MMM Do YY');

        return `Session ${this.props.number}: ${sessionDate}`;
    }

    // TOOD(AM): Pull out talks component.
    render() {
        return (
            <section className={styles.session}>
                <h3 className={styles.sessionTitle}>{this.getSessionTitle()}</h3>
                { this.props.talks.map((talk, i) => (
                    <div key={i} className={styles.talk}>
                        <Link to={prefixLink(talk.path)}><h6 className={styles.talkTitle}>{talk.data.title}</h6></Link>
                        <span>{talk.data.speaker}</span>
                        <p>{talk.data.description}</p>
                    </div>
                )) }
            </section>
        )
    }
}

Session.propTypes = {
    number: PropTypes.number.isRequired,
    talks: PropTypes.array.isRequired
};

export default Session;