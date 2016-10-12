import React, { PropTypes } from 'react';
import moment from 'moment';

const Session = ({ number, talks }) => {
    const sessionDate = moment(talks[0].data.date).format('MMM Do YY');

    return (
        <h2>Session {number} {sessionDate}</h2>
    )
};

Session.propTypes = {
    number: PropTypes.number.isRequired,
    talks: PropTypes.array.isRequired
};

export default Session;