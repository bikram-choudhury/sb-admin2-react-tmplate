import React, { Fragment } from 'react';
import Card from '../Card/Card';
import BarChart from '../../Chart.js/BarChart/BarChart';
import {
    BarChartDataForRevenue,
    DoughnutChartDemoData,
    LineChartDataForEarnings
} from './_demo.chart';
import { numberFormat } from '../../Chart.js/Utils/Utils';
import DoughnutChart from '../../Chart.js/DoughnutChart/DoughnutChart';
import LineChart from '../../Chart.js/LineChart/LineChart';

const Charts = () => {
    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Charts</h1>
            <p className="mb-4">
                Chart.js is a third party plugin that is used to generate the charts in this theme.
                The charts below have been customized - for further customization options,
                please visit the <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.chartjs.org/docs/latest/"
                >
                    official Chart.js documentation
                </a>.
            </p>

            {/* <!-- Content Row --> */}
            <div className="row">

                <div className="col-xl-8 col-lg-7">

                    {/* <!-- Area Chart --> */}
                    <Card parentClass="shadow"
                        heading="Area Chart"
                        headerClass="py-3"
                        type="primary"
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
                        <hr />
                        Styling for the area chart can be found in the
                        <code>/js/demo/chart-area-demo.js</code> file.
                    </Card>
                    {/* <!-- Bar Chart --> */}
                    <Card parentClass="shadow"
                        heading="Bar Chart"
                        headerClass="py-3"
                        type="primary"
                    >
                        <div className="chart-bar">
                            <BarChart
                                data={BarChartDataForRevenue}
                                title="Revenue"
                                color="#4e73df"
                                legend={false}
                                xAxesOptions={{
                                    time: { unit: 'month' },
                                    ticks: { maxTicksLimit: 6 }
                                }}
                                yAxesOptions={{
                                    ticks: {
                                        min: 0,
                                        max: 15000,
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
                        <hr />
                        Styling for the area chart can be found in the
                        <code>/js/demo/chart-bar-demo.js</code> file.
                    </Card>
                </div>

                <div className="col-xl-4 col-lg-5">
                    {/* <!-- Donut Chart --> */}
                    <Card parentClass="shadow"
                        heading="Donut Chart"
                        headerClass="py-3"
                        type="primary"
                    >
                        <div className="chart-pie pt-4">
                            <DoughnutChart
                                data={DoughnutChartDemoData}
                                legend={false}
                                cutoutWidth={80}
                            />
                        </div>
                        <hr />
                        Styling for the area chart can be found in the
                        <code>/js/demo/chart-pie-demo.js</code> file.
                    </Card>
                </div>
            </div>

        </Fragment>
    );
}

export default Charts;