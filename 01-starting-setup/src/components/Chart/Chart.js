import React from "react";

import ChartBar from "./ChartBar";

import "./chart.css";

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map((datapoint) => (
                <chartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={null}
                    label={datapoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
