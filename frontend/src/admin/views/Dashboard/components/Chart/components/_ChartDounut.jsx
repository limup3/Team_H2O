import React, {useState, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import data from '../../../../Doctor/data';
import {Button} from '@material-ui/core'

const ChartSize = {
    height : '50px'
  }



const DoughnutChart2 = props => {
  const [chart, setChart] = useState({})
  const {chartValue, chartData} = props
  const [chartData2, setChartData2]= useState([]) 
  const ageData = {
    labels: [
      '10대 미만', '10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'
    ],
    datasets: [{
      label: '연령별 이용자',
      data: chartData,
      backgroundColor: [
      '#ff6a6d',
      '#e28965',
      '#e7cd61',
      '#a0b8a1',
      '#63d365',
      '#0693e3',
      '#c79c9f',
      '#c78ee7'
      ],
      hoverBackgroundColor: [
      '#ff6a6d',
      '#e28965',
      '#e7cd61',
      '#a0b8a1',
      '#63d365',
      '#0693e3',
      '#c79c9f',
      '#c78ee7'
      ],
      borderWidth : 1
    }]
  }
  
  const sexData = data => ({
    labels: ['남성', '여성'],
    datasets: [{
      label: '성별 이용자',
      data: [55, 45],
      backgroundColor: [
      '#8bc34a',
      '#ffc107'
      ],
      hoverBackgroundColor: [
      '#8bc34a',
      '#ffc107'
      ],
      borderWidth : 1
    }]
  });
  
  const locationData = {
    labels: ['서울시 금천구', '서울시 광진구', '서울시 종로구', '서울시 마포구', '서울시 용산구'],
    datasets: [{
      label: '지역별 이용자',
      data: [72,56,33,21,11],
      backgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365'
      ],
      hoverBackgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365'
      ],
      borderWidth : 1
    }]
  };
  

  const daysData = props => ({
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'
    ],
    datasets: [{
      label: '월별 이용자',
      data: chartData,
      backgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7',
        '#9a72e3',
        '#8dce8d',
        '#8dc2ce',
        '#b1c5c9'
      ],
      hoverBackgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7',
        '#9a72e3',
        '#8dce8d',
        '#8dc2ce',
        '#b1c5c9'
      ],
      borderWidth : 1
    }]
  });



    

  useEffect(()=>{
    let chartData1 = []
    setChartData2(chartData)
    if(chartData===0){
      chartData1 = chartData2
    }
    const switchCase = (chartValue, chartData) =>{
      switch(chartValue){
        case "Age": return setChart(ageData) 
        case "Sex": return setChart(sexData(chartData)) 
        case "Days": return setChart(daysData(chartData))
        case "Location": return setChart(locationData(chartData))
          }
        }
    switchCase(chartValue, chartData)
    console.log("도넛차트")
    console.log(chartValue)
    console.log(chartData)

  },[chartValue])

  
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
            data={ageData}
          />
        </div>)
      }
    }

  export default DoughnutChart2