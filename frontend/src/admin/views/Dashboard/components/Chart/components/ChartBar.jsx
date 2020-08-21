import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';


const daysData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
    datasets: [
      {
        label: '월별 이용자',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 34, 21, 55, 78, 95]
      }
    ]
  };

const ageData = {
  labels: ['10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대 이상'],
  datasets: [
    {
      label: '연령별 이용자',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 34]
    }
  ]
};

const sexData = {
  labels: ['남성', '여성'],
  datasets: [
    {
      label: '연령별 이용자',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [55, 45]
    }
  ]
};





const ChartBar = props => {  
  const {chartValue} = props
  const [dataType, setDataType] = useState(ageData)
  const switchCase = (param) =>{
    switch(param){
     case "Age": return setDataType(ageData)
     case "Sex": return setDataType(sexData)
     case "Days": return setDataType(daysData)
       }
      }
    switchCase(chartValue)
    return (
      <div>
        <h2>{chartValue}</h2>
        <Bar 
          data={dataType}
        />
      </div>
    );
  }

  export default ChartBar