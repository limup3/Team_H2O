import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Menu,
  MenuItem ,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';
import { Link } from 'react-router-dom';
import { DoughnutChart, BarChart, MixedChart } from './Charts/ChartBody';

// import axios from 'axios';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  checkBoxStyle : {
    marginRight: theme.spacing(1)
  }
}));

// Redux

const CHART_AGE = 'CHART_AGE'
// Action

export const chartAgeAction = data => ({
  type: CHART_AGE, 
  payload: data
})
// ActionCreator

export const chartReducer = (state = {}, action) => {
  switch(action.type){
    case 'CHART_AGE': return action.payload
    default: return state
  }
}

//

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  //
  const [anchorEl, setAnchorEl] = useState(null);
  const [chartType, setChartType] = useState("도넛형")
  // CheckBox
  const [checked, setChecked] = useState({
    checkBox_Age: false,
    checkBox_Sex: false,
    checkBox_C: false,
    checkBox_D: false,
    checkBox_E: false,
    checkBox_ChartData: ""
  })
  
  const [chartData, setChartData] = useState("")

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleChange = event => {
    setChecked({checked, [event.target.name]: event.target.checked })
    
    // switch({chartData}){
    //   case 
    // }

    // 체크에 따른 true false
    // if(event.target.checked===!true){
    //   alert("True")
    // }else{
    //   alert("False")
    // }
  }
  useEffect(()=>{
    setChecked({...checked, checkBox_Age:true})
  },[])
  
  //
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small" variant="text" >
          
          {chartType}
        
          <ArrowDropDownIcon />
          </Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("도넛형"); }}>도넛형</MenuItem>
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("바형")}}>바형</MenuItem>
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("종합형")}}>종합형</MenuItem>
        </Menu>
        </div>}
        
        title="이용자수 통계"
      />
      <CardActions>
      <FormGroup 
        row>
        <FormControlLabel
          control={
            <Checkbox 
              defaultChecked={true}
              checked={checked.checkBox_Age} 
              onChange={handleChange} 
              name="checkBox_Age"
              />}
            label="연령"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={checked.checkBox_Sex} 
              onChange={handleChange} 
              name="checkBox_Sex" />}
            label="성별"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={checked.checkBox_C} 
              onChange={handleChange} 
              name="checkBox_C" />}
            label="지역"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={checked.checkBox_D} 
              onChange={handleChange} 
              name="checkBox_D" />}
            label="4"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={checked.checkBox_E} 
              onChange={handleChange} 
              name="checkBox_E" />}
            label="5"
        />
        </FormGroup>
      </CardActions>
      <Divider />
      <CardContent>
        {chartType === "도넛형" ? 
          <DoughnutChart chartData = {chartData}/>
          : chartType === "바형"
          ? <BarChart chartData={chartData}/>: 
          <MixedChart chartData={chartData}/>}
      </CardContent>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;