import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dp) => dp.value);
  const maxMonthValue = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={maxMonthValue}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
