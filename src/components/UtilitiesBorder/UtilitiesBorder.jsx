import React, { Fragment } from 'react';
import { BorderUtilitiesTypes } from './_border';

const UtilitiesBorder = _ => {
    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
            <p className="mb-4">
                Bootstrap&rsquo;s default utility classes can be found on the official
              <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page.
              The custom utilities below were created to extend this theme past the
              default utility classes built into Bootstrap&rsquo;s framework.
            </p>

            {/* <!-- Content Row --> */}
            <div className="row">

                {/* <!-- Border Left Utilities --> */}
                <div className="col-lg-6 border-left-utilities">
                    {
                        BorderUtilitiesTypes.map(type => {
                            return (
                                <div className={
                                    `card mb-4 py-3 border-left-${type}`
                                } key={type}>
                                    <div className="card-body">
                                        .border-left-{type}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                {/* <!-- Border Bottom Utilities --> */}
                <div className="col-lg-6 border-bottom-utilities">
                    {
                        BorderUtilitiesTypes.map(type => {
                            return (
                                <div className={
                                    `card mb-4 py-3 border-bottom-${type}`
                                } key={type}>
                                    <div className="card-body">
                                        .border-bottom-{type}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default UtilitiesBorder;