import React, { Fragment } from 'react';
import LineChart from '../../Chart.js/LineChart/LineChart';
import { numberFormat } from '../../Chart.js/Utils/Utils';
import Card from '../Card/Card';
import CardBox from '../CardBox/CardBox';
import { CardBoxData } from '../Cards/_card';
import { DoughnutChartDemoData, LineChartDataForEarnings } from '../Charts/_demo.chart';
import DoughnutChart from '../../Chart.js/DoughnutChart/DoughnutChart';
import ProgressBar from '../ProgressBar/ProgressBar';

const Dashboard = () => {
    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <span className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i>
                    Generate Report
                </span>
            </div>

            <div className="row">
                {
                    CardBoxData.map(card => {
                        return (
                            <div className="col-xl-3 col-md-6 mb-4" key={card.type}>
                                <CardBox {...card} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">

                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <Card parentClass="shadow"
                        heading="Area Chart"
                        headerClass={
                            `py-3 d-flex flex-row align-items-center justify-content-between`
                        }
                        type="primary"
                        dropdown={true}
                    >
                        <div className="chart-area">
                            <LineChart
                                data={LineChartDataForEarnings}
                                title="Earnings"
                                legend={false}
                                xAxesOptions={{
                                    time: { unit: 'date' },
                                    ticks: { maxTicksLimit: 7 }
                                }}
                                yAxesOptions={{
                                    ticks: {
                                        maxTicksLimit: 5,
                                        padding: 10,
                                        // Include a dollar sign in the ticks
                                        callback: function (value) {
                                            return '$' + numberFormat(value);
                                        }
                                    }
                                }}
                            />
                        </div>
                    </Card>

                </div>

                {/* <!-- Pie Chart --> */}
                <div className="col-xl-4 col-lg-5">
                    <Card parentClass="shadow"
                        heading="Donut Chart"
                        headerClass={
                            `py-3 d-flex flex-row align-items-center justify-content-between`
                        }
                        type="primary"
                        dropdown={true}
                    >
                        <div className="chart-pie pt-4">
                            <DoughnutChart
                                data={DoughnutChartDemoData}
                                legend={false}
                                cutoutWidth={60}
                            />
                        </div>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success"></i> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info"></i> Referral
                            </span>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <Card parentClass="shadow"
                        headerClass="py-3"
                        heading="Projects"
                        type="primary"
                    >
                        <div className="mb-4">
                            <ProgressBar
                                title="Server Migration"
                                percentage={20}
                                type="bg-danger"
                                headerClass="font-weight-bold"
                                headerLabel="20%"
                            />
                        </div>

                        <div className="mb-4">
                            <ProgressBar
                                title="Sales Tracking"
                                percentage={40}
                                type="bg-warning"
                                headerClass="font-weight-bold"
                                headerLabel="40%"
                            />
                        </div>

                        <div className="mb-4">
                            <ProgressBar
                                title="Customer Database"
                                percentage={60}
                                headerClass="font-weight-bold"
                                headerLabel="60%"
                            />
                        </div>

                        <div className="mb-4">
                            <ProgressBar
                                title="Payout Details"
                                percentage={80}
                                type="bg-info"
                                headerClass="font-weight-bold"
                                headerLabel="80%"
                            />
                        </div>

                        <div className="mb-4">
                            <ProgressBar
                                title="Account Setup"
                                percentage={100}
                                type="bg-success"
                                headerClass="font-weight-bold"
                                headerLabel="Complete!"
                            />
                        </div>
                    </Card>

                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-primary text-white shadow">
                                <div className="card-body">
                                    Primary
                                    <div className="text-white-50 small">#4e73df</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-success text-white shadow">
                                <div className="card-body">
                                    Success
                                    <div className="text-white-50 small">#1cc88a</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    Info
                                    <div className="text-white-50 small">#36b9cc</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-warning text-white shadow">
                                <div className="card-body">
                                    Warning
                                    <div className="text-white-50 small">#f6c23e</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-danger text-white shadow">
                                <div className="card-body">
                                    Danger
                                    <div className="text-white-50 small">#e74a3b</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-secondary text-white shadow">
                                <div className="card-body">
                                    Secondary
                                    <div className="text-white-50 small">#858796</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 mb-4">

                    {/* <!-- Illustrations --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                    style={{ "width": "25rem" }}
                                    src={
                                        require('../../assets/img/undraw_posting_photo.svg')
                                    } alt="" />
                            </div>
                            <p>
                                Add some quality, svg illustrations to your project courtesy of
                                <a
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    href="https://undraw.co/"
                                >unDraw</a>,
                                a constantly updated collection of beautiful svg images that you
                                can use completely free and without attribution!
                            </p>
                            <a
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                href="https://undraw.co/"
                            >Browse Illustrations on unDraw &rarr;</a>
                        </div>
                    </div>

                    {/* <!-- Approach --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Development Approach
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>
                                SB Admin 2 makes extensive use of Bootstrap 4 utility
                                classes in order to reduce CSS bloat and poor page performance.
                                Custom CSS classes are used to create custom components
                                and custom utility classes.
                            </p>
                            <p className="mb-0">
                                Before working with this theme, you should become familiar
                                with the Bootstrap framework, especially the utility classes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;