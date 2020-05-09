import React, { createRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { numberFormat, globalConfig } from './../Utils/Utils';

Chart.defaults.global = {
    ...Chart.defaults.global,
    ...globalConfig
};

const BarChart = props => {
    const chartRef = createRef();
    const {
        data,
        title,
        color,
        xAxesOptions,
        yAxesOptions,
        legend
    } = props;

    const myBarChart = useRef(null);
    useEffect(() => {
        myBarChart.current = new Chart(chartRef.current, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: title,
                    data: [],
                    backgroundColor: color,
                    maxBarThickness: 25,
                    borderColor: color
                    // hoverBackgroundColor: "#2e59d9" 
                }]
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
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    callbacks: {
                        label: function (tooltipItem, chart) {
                            var datasetLabel = chart.datasets[
                                tooltipItem.datasetIndex
                            ].label || '';
                            return datasetLabel + ': $' + numberFormat(tooltipItem.yLabel);
                        }
                    }
                },
            }

        });
    }, [ chartRef, color, legend, title, xAxesOptions, yAxesOptions ])

    useEffect(() => {
        if (myBarChart.current) {
            myBarChart.current.data.labels = data.map(dt => dt.label);
            myBarChart.current.data.datasets[ 0 ].data = data.map(dt => dt.value);
            myBarChart.current.update();
        }
    }, [ data ]);

    return (
        <canvas ref={chartRef} />
    );
};

BarChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    color: PropTypes.string,
    xAxesOptions: PropTypes.object,
    yAxesOptions: PropTypes.object,
    legend: PropTypes.bool
};

export default BarChart;