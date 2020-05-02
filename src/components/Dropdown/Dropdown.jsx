import PropTypes from 'prop-types';
import React, { Fragment, useState, createRef, useEffect, useCallback } from 'react';

const Dropdown = props => {
    const {
        type,
        className,
        items,
        name,
        animatedClassName,
        selected
    } = props;

    const [ toggleStatus, setToggleStatus ] = useState(false);
    let dropdownRef = createRef();

    const hasFocus = useCallback((target) => {
        // React ref callbacks pass `null` when a component unmounts, 
        // so guard against `dropdownRef` not existing

        if (!dropdownRef) return false;

        let dropdownHasFocus = false;
        const nodeIterator = document.createNodeIterator(
            dropdownRef, NodeFilter.SHOW_ELEMENT, null, false
        );
        let node;

        while (node) {
            if (node === target) {
                dropdownHasFocus = true;
                break;
            }
            node = nodeIterator.nextNode();
        }

        return dropdownHasFocus;

    }, [ dropdownRef ]);

    const handleMouseEvent = useCallback((event) => {
        const dropdownHasFocus = hasFocus(event.target);
        setToggleStatus(dropdownHasFocus);
    }, [ hasFocus ]);

    useEffect(() => {
        // handles mouse events like click and dblclick
        document.addEventListener('mouseup', handleMouseEvent);
        return () => {
            document.removeEventListener('mouseup', handleMouseEvent);
        }
    }, [ dropdownRef, handleMouseEvent ]);

    if (type !== 'link' && type !== 'button') return null;

    return (
        <div className="dropdown" ref={itemRef => { dropdownRef = itemRef }}>
            {
                type === 'link' ? (
                    <span
                        className={`dropdown-toggle ${className}`}
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => setToggleStatus(!toggleStatus)}
                    > {name} </span>
                ) : (
                        <button
                            className={`dropdown-toggle ${className}`}
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onClick={() => setToggleStatus(!toggleStatus)}
                        >{name}</button>
                    )
            }

            <div
                className={
                    `dropdown-menu ${animatedClassName} ` +
                    `${toggleStatus ? 'show' : ''}`
                }
            >
                {
                    items.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <span
                                    className="dropdown-item"
                                    onClick={() => selected(item)}
                                >
                                    {item.name}
                                </span>
                                {
                                    item.divider ? (
                                        <div className="dropdown-divider"></div>
                                    ) : null
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            name: PropTypes.string,
            divider: PropTypes.bool
        })
    ),
    name: PropTypes.string,
    animatedClassName: PropTypes.string,
    selected: PropTypes.func
};

export default Dropdown;