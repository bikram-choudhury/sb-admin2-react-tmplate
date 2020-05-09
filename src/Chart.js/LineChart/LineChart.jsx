import React, { createRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { numberFormat, globalConfig } from '../Utils/Utils';

Chart.defaults.global = {
    ...Chart.defaults.global,
    ...globalConfig
};

const LineChart = props => {
    const chartRef = createRef();
    const {
        data,
        title,
        xAxesOptions,
        yAxesOptions,
        legend
    } = props;

    const myLineChart = useRef(null);
    useEffect(() => {
        myLineChart.current = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: title,
                    lineTension: 0.3,
                    backgroundColor: "rgba(78, 115, 223, 0.05)",
                    borderColor: "rgba(78, 115, 223, 1)",
                    pointRadius: 3,
                    pointBackgroundColor: "rgba(78, 115, 223, 1)",
                    pointBorderColor: "rgba(78, 115, 223, 1)",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                    pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                    data: [],
                }],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ...xAxesOptions
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgb(234, 236, 244)",
                            zeroLineColor: "rgb(234, 236, 244)",
                            drawBorder: false,
                            borderDash: [ 2 ],
                            zeroLineBorderDash: [ 2 ]
                        },
                        ...yAxesOptions
                    }],
                },
                legend: {
                    display: legend
                },
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    intersect: false,
                    mode: 'index',
                    caretPadding: 10,
                    callbacks: {
                        label: function (tooltipItem, chart) {
                            var datasetLabel = chart.datasets[
                                tooltipItem.datasetIndex
                            ].label || '';
                            return datasetLabel + ': $' + numberFormat(tooltipItem.yLabel);
                        }
                    }
                }
            }
        });
    }, [ chartRef, legend, title, xAxesOptions, yAxesOptions ])

    useEffect(() => {
        if (myLineChart.current) {
            myLineChart.current.data.labels = data.map(dt => dt.label);
            myLineChart.current.data.datasets[ 0 ].data = data.map(dt => dt.value);
            myLineChart.current.update();
        }
    }, [ data ]);

    return (
        <canvas ref={chartRef} />
    );
};

LineChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    xAxesOptions: PropTypes.object,
    yAxesOptions: PropTypes.object,
    legend: PropTypes.bool
};

export default LineChart;