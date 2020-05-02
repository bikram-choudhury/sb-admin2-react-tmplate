import React from 'react';
import PropTypes from 'prop-types';

const RotationCard = props => {
    const { title, className } = props;
    return (
        <div className={`p-3 my-4 d-inline-block ${className}`}>{title}</div>
    );
}

RotationCard.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

export default RotationCard;