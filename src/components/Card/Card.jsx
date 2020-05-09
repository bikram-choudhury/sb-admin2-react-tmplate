import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    const {
        heading,
        headerClass,
        parentClass,
        children,
        type,
        toggle,
        dropdown
    } = props;

    const [ toggleStatus, updateToggleStatus ] = React.useState(true);
    const [ dropdownStatus, updateDropdownStatus ] = React.useState(false);

    return (
        <div className={`card ${parentClass} mb-4`}>
            <div
                className={`card-header ${headerClass} ${toggleStatus ? '' : 'collapsed'}`}
                data-toggle={toggle ? "collapse" : false}
                onClick={
                    () => {
                        if (toggle) {
                            updateToggleStatus(!toggleStatus);
                        }
                    }
                }
            >
                <h6 className={`m-0 font-weight-bold text-${type}`}>
                    {heading}
                </h6>
                {
                    dropdown ? (
                        <div
                            className={`dropdown no-arrow ${dropdownStatus ? 'show' : ''}`}
                            onClick={() => updateDropdownStatus(!dropdownStatus)}
                        >
                            <span
                                className="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={dropdownStatus ? true : false}
                            >
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </span>
                            <div className={
                                `dropdown-menu dropdown-menu-right 
                                shadow animated--fade-in ${dropdownStatus ? 'show' : ''}`
                            }
                                aria-labelledby="dropdownMenuLink"
                            >
                                <div className="dropdown-header">Dropdown Header:</div>
                                <span className="dropdown-item">Action</span>
                                <span className="dropdown-item">Another action</span>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item">Something else here</span>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <div className={
                `card-body ${toggle ? (`collapse ${toggleStatus ? 'show' : ''}`) : ''}`
            }>{children}</div>
        </div>
    );
}

Card.propTypes = {
    heading: PropTypes.string,
    headerClass: PropTypes.string,
    parentClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    type: PropTypes.string,
    toggle: PropTypes.bool,
    dropdown: PropTypes.bool
}

export default Card;