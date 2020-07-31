import React, {useState} from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

// Dounut Chart Data
const dougnutData = {
	labels: [ 
		'Red', 'Blue', 'green'
	],
	datasets: [{
		label: '데이터',
		data: [20, 30, 50],
		backgroundColor: [
        'red',
        'blue',
        'green'
        ],
		hoverBackgroundColor: [
        'red',
        'blue',
        'green'
        ],
        borderWidth : 1
	}]
};

var createReactClass = require('create-react-class');
export const DoughnutChart = createReactClass({
  displayName: 'DoughnutChart',
	render() {
		return (
		  <div>
			<h2>Dounut Chart</h2>
			<Doughnut data={dougnutData} />
		  </div>
		);
	  }
	});




// Bar Chart Data
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Bar chart Data',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export const BarChart = createReactClass => ({
  displayName: 'BarChart',
	render() {
    return (
      <div>
        <h2>Bar Chart</h2>
        <Bar
          data={barData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});

// Mixed Chart Data
const mixedData = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
  label: 'Sales',
  type:'line',
  data: [51, 65, 40, 49, 60, 37, 40],
  fill: false,
  borderColor: '#EC932F',
  backgroundColor: '#EC932F',
  pointBorderColor: '#EC932F',
  pointBackgroundColor: '#EC932F',
  pointHoverBackgroundColor: '#EC932F',
  pointHoverBorderColor: '#EC932F',
  yAxisID: 'y-axis-2'
  },{
  type: 'bar',
  label: 'Visitor',
  data: [200, 185, 590, 621, 250, 400, 95],
  fill: false,
  backgroundColor: '#71B37C',
  borderColor: '#71B37C',
  hoverBackgroundColor: '#71B37C',
  hoverBorderColor: '#71B37C',
  yAxisID: 'y-axis-1'
  }]
  };
  
  const options = {
  responsive: true,
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  tooltips: {
  mode: 'label'
  },
  elements: {
  line: {
  fill: false
  }
  },
  scales: {
  
  xAxes: [
    {
      display: true,
      gridLines: {
        display: false
      },
  
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    }
  ],
  yAxes: [
    {
      type: 'linear',
      display: true,
      position: 'left',
      id: 'y-axis-1',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    },
    {
      type: 'linear',
      display: true,
      position: 'right',
      id: 'y-axis-2',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }
  ]
  }
  };

const plugins = [{
  afterDraw: (chartInstance, easing) => {
  const ctx = chartInstance.chart.ctx;
  ctx.fillText("This text drawn by a plugin", 100, 100);
  }
  }];


export const MixedChart = createReactClass => ({
  displayName: 'MixedChart',

  render() {
    return (
      <div>
        <h2>Mixed data Example</h2>
        <Bar
          data={mixedData}
          options={options}
          plugins={plugins}
        />
      </div>
    );
  }
});

const ChartBody = () => {
    return <div 
	style={{backgroundColor:"white"}}>
    <DoughnutChart/>
    <BarChart/>
    <MixedChart/>
</div>
}
export default ChartBody