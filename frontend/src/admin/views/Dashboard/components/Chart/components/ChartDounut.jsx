import React, {useState, useEffect} from 'react';
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
    const [chart, setChart] = useState({})
    const {chartValue} = props
  
   
  
    // useEffect(()=>{
    //     setChart({})
    //   const switchCase = (param) =>{
    //     switch(param){
    //      case "Age": return setChart(ageData) 
    //      case "Sex": return setChart(sexData) 
    //      case "Days": return setChart(daysData)
    //      case "Location": return setChart(locationData)
    //        }
    //       }
    //   switchCase(chartValue)
    // },[chartValue])
  
   
      if(chartValue) {
        return (
        <div>
          <h2>{chart.title}</h2>
          <Doughnut 
            className={ChartSize}
            data={chart}
          />
        </div>) 
        }else{
        return (
          <div>
            <h2>{chart.title}</h2>
            <Doughnut 
            className={ChartSize}
              // data={ageData}
            />
          </div>)
        }
      }
  
  
    export default DoughnutChart