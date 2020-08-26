import React, {useState, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const ChartSize = {
    height : '50px'
  }
  

const DoughnutChart2 = props => {  
  const [chart, setChart] = useState({})
  const {chartValue} = props
  const [showChart, setShowChart]=useState()
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState('')
  const yyyy = new Date().getFullYear()

  

  const ageData = {
    labels: [
      '10대 미만', '10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'
    ],
    datasets: [{
      label: '연령별 이용자',
      data: userData,
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

  const sexData = {
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
  };

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

  const daysData = {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'
    ],
    datasets: [{
      label: '월별 이용자',
      data: userData,
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
  };


  
  useEffect(()=>{
    axios
      .get(`http://localhost:8080/user/userList`)
      .then(response => {
        let axiosData = []
        let count = 0
        if(chartValue===""||"Age"){
          for(let i=0; i<=7; i++){
            response.data.forEach((chart)=>{
              if(yyyy-parseInt(chart.birthday.substr(0,4))>=(i)*10
                &&yyyy-parseInt(chart.birthday.substr(0,4))<(i+1)*10
                ){
                  count = count+1
                }
              }
            )
            axiosData.push(count)
            count=0
          }
          setUserData(axiosData)
          axiosData=[]
        }

        console.log("useEffectChartValue")
        console.log(chartValue)

        if(chartValue==="Days"){
          for(let i=0; i<=11; i++){
            response.data.forEach((chart)=>{
              if(parseInt(chart.birthday.substr(5,2))===i+1){
                count = count+1
                }
              }
            )
            
            axiosData.push(count)
            console.log("useEffect엑시오스 데이터")
            console.log(axiosData)
            count=0
          }
          setUserData(axiosData)
          axiosData=[]
        }
        
      })
      .catch(error => {
        alert("서버와의 연결이 되지 않았습니다.");
      })
      setLoading(false);

      const switchCase = chartValue =>{
        switch(chartValue){
          case "Age": return setShowChart(ageData)
          case "Sex": return setShowChart(sexData)
          case "Days": return setShowChart(daysData)
          case "Location": return setShowChart(locationData)
          default: return setShowChart(ageData)
            }
          }
      switchCase(chartValue)

  },[chartValue])

    

  console.log("MainShowChart")
  console.log(showChart)
  console.log("MainUserData")
  console.log(userData)

    // if(chartVa lue) {
      return(
      <div>
        <h2>{chart.title}</h2>
        {chartValue===""&&<Doughnut 
          className={ChartSize}
          data={ageData}
        />}
        {chartValue&&<Doughnut 
          className={ChartSize}
          data={showChart}
          // data={(chartValue===""||"Age")? ageData: 
          //       (chartValue==="Sex")? sexData:
          //       (chartValue==="Days")? daysData: 
          //       (chartValue==="Location")? locationData: null}
        />}
      </div>
      ) 
    }

  export default DoughnutChart2