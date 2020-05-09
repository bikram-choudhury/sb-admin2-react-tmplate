import React, { Fragment } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Dropdown from '../Dropdown/Dropdown';
import { DropdownData } from '../UtilitiesAnimation/_dropdown';
import RotationCard from '../RotationCard/RotationCard';

const UtilitiesOthers = () => {
    const getSelectedItem = (item) => {
        console.log(item);
    }
    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
            <p className="mb-4">
                Bootstrap&rsquo;s default utility classes can be found on the official&nbsp;
                <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page.&nbsp;
                The custom utilities below were created to extend this theme past the &nbsp;
                default utility classes built into Bootstrap&rsquo;s framework.
            </p>

            {/* <!-- Content Row --> */}
            <div className="row">

                <div className="col-lg-6">

                    {/* <!-- Overflow Hidden --> */}
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Overflow Hidden Utilty
                            </h6>
                        </div>
                        <div className="card-body">
                            Use <code>.o-hidden</code> to set the &nbsp;
                            overflow property of any element to hidden.
                        </div>
                    </div>

                    {/* <!-- Progress Small --> */}
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Progress Small Utility
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <ProgressBar
                                    title="Normal Progress Bar"
                                    percentage={75}
                                />
                            </div>
                            <div className="mb-2">
                                <ProgressBar
                                    title="Small Progress Bar"
                                    percentage={75}
                                    size="progress-sm"
                                />
                            </div>
                            Use the <code>.progress-sm</code> &nbsp;
                            class along with <code>.progress</code>
                        </div>
                    </div>

                    {/* <!-- Dropdown No Arrow --> */}
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Dropdown - No Arrow
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <Dropdown
                                    items={DropdownData}
                                    type="button"
                                    noArrow={true}
                                    className="btn btn-secondary"
                                    name="Dropdown (no arrow)"
                                    animatedClassName=""
                                    selected={getSelectedItem}
                                />
                            </div>
                            Add the <code>.no-arrow</code> &nbsp;
                            class alongside the <code>.dropdown</code>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    {/* <!-- Roitation Utilities --> */}
                    <div className="card">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Rotation Utilities
                            </h6>
                        </div>
                        <div className="card-body text-center">
                            <RotationCard
                                title=".rotate-15"
                                className="bg-primary text-white rotate-15"
                            />
                            <hr />
                            <RotationCard
                                title=".rotate-n-15"
                                className="bg-primary text-white rotate-n-15"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </Fragment>
    );
}

export default UtilitiesOthers;