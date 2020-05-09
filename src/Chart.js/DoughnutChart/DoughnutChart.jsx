import React, { createRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const DoughnutChart = props => {
    const chartElRef = createRef();
    const chartRef = useRef(null);

    const {
        data,
        legend,
        cutoutWidth
    } = props;

    useEffect(() => {
        chartRef.current = new Chart(chartElRef.current, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    hoverBackgroundColor: [],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: legend
                },
                cutoutPercentage: cutoutWidth,
            },
        })
    }, [ chartElRef, cutoutWidth, legend ]);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.data.labels = data.map(dt => dt.label);
            chartRef.current.data.datasets[ 0 ].data = data.map(dt => dt.value);
            chartRef.current.data.datasets[ 0 ].backgroundColor = data.map(dt => dt.color);
            chartRef.current.data.datasets[ 0 ]
                .hoverBackgroundColor = data.map(dt => dt.hoverColor);
            chartRef.current.update();
        }
    }, [ data ])

    return (
        <canvas ref={chartElRef} />
    );
}

DoughnutChart.propTypes = {
    data: PropTypes.array,
    legend: PropTypes.bool,
    cutoutWidth: PropTypes.number
}

export default DoughnutChart;