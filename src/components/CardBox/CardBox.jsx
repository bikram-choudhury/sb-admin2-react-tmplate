import React from 'react';
import PropTypes from 'prop-types';

const CardBox = props => {
    const {
        type,
        heading,
        progress,
        title,
        icon
    } = props;

    return (
        <div className={`card border-left-${type} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={
                            `text-xs font-weight-bold text-${type} text-uppercase mb-1`
                        }>{heading}</div>
                        {
                            progress ? (
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className={
                                            `h5 mb-0 mr-3 font-weight-bold text-gray-800`
                                        }>{title} </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: title }}
                                                aria-valuenow={progress}
                                                aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {title}
                                    </div>
                                )
                        }
                    </div>
                    <div className="col-auto">
                        <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

CardBox.propTypes = {
    type: PropTypes.string,
    heading: PropTypes.string,
    progress: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string
};

export default CardBox;