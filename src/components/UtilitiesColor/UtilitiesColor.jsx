import React, { Fragment } from 'react';
import { TextColor, GradientColor, GrayscaleBackground } from './_colors';

const UtilitiesColor = _ => {

    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
            <p className="mb-4">
                Bootstrap &rsquo;s default utility classes can be found on the official
              <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>
              page. The custom utilities below were created to extend this theme
              past the default utility classes built into Bootstrap &rsquo;s framework.</p>

            {/* <!-- Content Row --> */}
            <div className="row">

                {/* <!-- First Column --> */}
                <div className="col-lg-4">

                    {/* <!-- Custom Text Color Utilities --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {TextColor.heading}
                            </h6>
                        </div>
                        <div className="card-body">
                            {
                                TextColor.list.map(color => {
                                    return (
                                        <p
                                            className={
                                                `text-gray-${color.width} p-3 ${color.bgClass} m-0`
                                            } key={color.width}
                                        >
                                            .text-gray-{color.width}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* <!-- Custom Font Size Utilities --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Custom Font Size Utilities
                            </h6>
                        </div>
                        <div className="card-body">
                            <p className="text-xs">.text-xs</p>
                            <p className="text-lg mb-0">.text-lg</p>
                        </div>
                    </div>

                </div>

                {/* <!-- Second Column --> */}
                <div className="col-lg-4">

                    {/* <!-- Background Gradient Utilities --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {GradientColor.heading}
                            </h6>
                        </div>
                        <div className="card-body">
                            {
                                GradientColor.list.map(type => {
                                    return (
                                        <div className={
                                            `px-3 py-5 bg-gradient-${type} text-white`
                                        } key={type}>
                                            .bg-gradient-{type}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                {/* <!-- Third Column --> */}
                <div className="col-lg-4">

                    {/* <!-- Grayscale Utilities --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {GrayscaleBackground.heading}
                            </h6>
                        </div>
                        <div className="card-body">
                            {
                                TextColor.list.map(color => {
                                    return (
                                        <p
                                            className={
                                                `bg-gray-${color.width} p-3 ${color.bgClass} m-0`
                                            } key={color.width}
                                        >
                                            .bg-gray-{color.width}
                                        </p>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default UtilitiesColor;