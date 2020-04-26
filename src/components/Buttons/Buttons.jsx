import React, { Fragment } from 'react';
import { CircleButtons, BrandButtons, SplitButtons } from './_buttons';

const Buttons = _ => {
    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
            <div className="row">
                <div className="col-lg-6">
                    {/* <!-- Circle Buttons --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {CircleButtons.title}
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>{CircleButtons.description}</p>
                            {/* <!-- Circle Buttons (Default) --> */}
                            <div className="mb-2">
                                <code>{CircleButtons.code}</code>
                            </div>
                            {
                                CircleButtons.list.map(button => {
                                    return (
                                        <span
                                            className={`btn btn-circle ${button.type}`}
                                            key={button.type}
                                        >
                                            <i className={button.icon}></i>
                                        </span>
                                    )
                                })
                            }

                            {/* <!-- Circle Buttons (Small) --> */}
                            <div className="mt-4 mb-2">
                                <code>{CircleButtons.code} .btn-sm</code>
                            </div>
                            {
                                CircleButtons.list.map(button => {
                                    return (
                                        <span
                                            className={`btn btn-circle btn-sm ${button.type}`}
                                            key={button.type}
                                        >
                                            <i className={button.icon}></i>
                                        </span>
                                    )
                                })
                            }
                            {/* <!-- Circle Buttons (Large) --> */}
                            <div className="mt-4 mb-2">
                                <code>{CircleButtons.code} .btn-lg</code>
                            </div>
                            {
                                CircleButtons.list.map(button => {
                                    return (
                                        <span
                                            className={`btn btn-circle btn-lg ${button.type}`}
                                            key={button.type}
                                        >
                                            <i className={button.icon}></i>
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <!-- Brand Buttons --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {BrandButtons.title}
                            </h6>
                        </div>
                        <div className="card-body">
                            <p dangerouslySetInnerHTML={
                                { __html: BrandButtons.description }
                            }></p>
                            {
                                BrandButtons.list.map(button => {
                                    return (
                                        <span
                                            className={`btn btn-block ${button.type}`}
                                            key={button.type}
                                        >
                                            <i className={button.icon}></i>
                                            .{button.type}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                {SplitButtons.title}
                            </h6>
                        </div>
                        <div className="card-body">
                            <p dangerouslySetInnerHTML={
                                { __html: SplitButtons.description }
                            }></p>

                            {
                                SplitButtons.list.map(button => {
                                    return (
                                        <Fragment key={button.type}>
                                            <span className={`btn btn-icon-split ${button.type}`}>
                                                <span className="icon text-gray-50">
                                                    <i className={button.icon}></i>
                                                </span>
                                                <span className="text">{button.text}</span>
                                            </span>
                                            {
                                                button.dividerText ? (
                                                    <Fragment>
                                                        <div className="mb-4"></div>
                                                        <p>{button.dividerText}</p>
                                                    </Fragment>
                                                ) : (
                                                        <div className="my-2"></div>
                                                    )
                                            }
                                        </Fragment>
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

export default Buttons;