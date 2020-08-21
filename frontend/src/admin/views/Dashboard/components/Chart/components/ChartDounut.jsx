import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// Dounut Chart Data
const ChartSize = {
    height : '50px'
  }
  
  const dougnutData = {
      labels: [ 
      '청소년', '청년', '중년', '장년', '노년'
      ],
      datasets: [{
          label: '데이터',
          data: [15, 35, 25, 15, 10],
          backgroundColor: [
          'red',
          'orange',
          'gray',
          'green',
          'blue'
          ],
          hoverBackgroundColor: [
          'red',
          'orange',
          'gray',
          'green',
          'blue'
          ],
          borderWidth : 1
      }]
  };
  
  
  const DoughnutChart = props => {
      const {chartValue} = props
    return (
    <div>
      <h2>{chartValue}</h2>
    <Doughnut 
    className={ChartSize}
    data={dougnutData} />
    </div>
    );
  }

  export default DoughnutChart