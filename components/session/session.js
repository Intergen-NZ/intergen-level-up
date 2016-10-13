import React, { PropTypes } from 'react';
import moment from 'moment';

import Talk from '../talk/talk';
import styles from './session.module.css';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.getSessionTitle = this.getSessionTitle.bind(this);
    }

    getSessionTitle() {
        const talk = this.props.talks[0];
        const sessionDate = moment(talk.data.date).format('MMM Do [\']YY');

        return `Session ${this.props.number}: ${sessionDate}`;
    }

    render() {
        return (
            <section className={styles.session}>
                <h3 className={styles.title}>{this.getSessionTitle()}</h3>
                <div className={styles.talksContainer}>
                	{ this.props.talks.map((talk, i) => <Talk key={i} data={talk.data} path={talk.path} />) }
                </div>
            </section>
        )
    }
}

Session.propTypes = {
    number: PropTypes.number.isRequired,
    talks: PropTypes.array.isRequired
};

export default Session;