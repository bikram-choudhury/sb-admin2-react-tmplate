import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = props => {
    const {
        title,
        percentage,
        type
    } = props;
    const styleObj = { "width": `${percentage}%` };

    return (
        <Fragment>
            <div className={`mb-1 small`}>{title}</div>
            <div className={`progress ${type}`}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={styleObj}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </Fragment>
    );
}

ProgressBar.propTypes = {
    title: PropTypes.string,
    percentage: PropTypes.number,
    type: PropTypes.string
};

export default ProgressBar;