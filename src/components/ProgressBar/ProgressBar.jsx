import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = props => {
    const {
        title,
        percentage,
        size,
        headerClass,
        headerLabel,
        type
    } = props;
    const styleObj = { "width": `${percentage}%` };

    return (
        <Fragment>
            <div className={`mb-1 small ${headerClass}`}>
                {title}
                {
                    headerLabel ? (
                        <span className="float-right">{headerLabel}</span>
                    ): null
                }
            </div>
            <div className={`progress ${size}`}>
                <div
                    className={`progress-bar ${type}`}
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
    type: PropTypes.string,
    size: PropTypes.string,
    headerClass: PropTypes.string,
    headerLabel: PropTypes.string
        
};

export default ProgressBar;