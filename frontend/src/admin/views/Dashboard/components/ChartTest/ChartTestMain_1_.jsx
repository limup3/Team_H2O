import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
import axios from 'axios'

import { ChartBar, ChartDounut } from '../Chart/components';

// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {},
  chartContainer: {
    height: 300,
    position: 'relative'
  },
//   actions: {
//     justifyContent: 'flex-end'
//   },
  checkBoxStyle : {
    marginRight: theme.spacing(1)
  }
}));

const ChartTestMain_1_ = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [anchorElType, setAnchorElType] = useState(null);
  const [anchorElHead, setAnchorElHead] = useState(null);
  const [chartType, setChartType] = useState("도넛형")
  const [chartHead, setChartHead] = useState("이용자 통계")
  const [chartValue, setChartValue] = useState("")
  const [userData, setUserData]= useState([])
  const [loading, setLoading]= useState('')
  const [checked, setChecked] = useState({
    checkBox_Age: false,
    checkBox_Sex: false,
    checkBox_Location: false,
    checkBox_days: false,
    checkBox_E: false,
    checkBox_ChartData: ""
  })

  useEffect(()=>{
    setChecked({...checked, checkBox_Age:true})
    axios
      .get(`http://localhost:8080/user/userList`)
      .then(response => {
        setUserData(response.data)
      })
      .catch(error => {
        alert("서버와의 연결이 되지 않았습니다.");
      })
      setLoading(false);
  },[])
  
  const handleChartTypeClick = (event) => {
    setAnchorElType(event.currentTarget);
  };

  const handleChartTypeClose = () => {
    setAnchorElType(null);
  };

  const handleChartHeadClick = (event) => {
    setAnchorElHead(event.currentTarget);
  };
  const handleChartHeadClose = () => {
    setAnchorElHead(null);
  };


  const handleChange = event => {
    setChecked({checked, [event.target.name]: event.target.checked })
    if(event.target.checked===true){
      switch(event.target.name){
        case "checkBox_Age": return setChartValue("Age")
        case "checkBox_Sex": return setChartValue("Sex")
        case "checkBox_Location": return setChartValue("Location")
        case "checkBox_days": return setChartValue("Days")
      }
    }
  }

  
  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
            
          <div>
            <Button 
                style={{left:"100px"}}
                onClick={handleChartHeadClick} size="medium" variant="test">
            {chartHead}
            </Button>
            <Menu
                anchorEl={anchorElHead}
                keepMounted
                open={Boolean(anchorElHead)}
                onClose={handleChartHeadClose}>
                <MenuItem onClick={()=> {
                    setAnchorElHead(null); setChartHead("이용자 통계"); }}>이용자 통계</MenuItem>
                <MenuItem onClick={()=> {
                    setAnchorElHead(null); setChartHead("의사 통계"); }}>의사 통계</MenuItem>
                <MenuItem onClick={()=> {
                    setAnchorElHead(null); setChartHead("병원 통계"); }}>병원 통계</MenuItem>
                <MenuItem onClick={()=> {
                    setAnchorElHead(null); setChartHead("게시판 통계"); }}>게시판 통계</MenuItem>
            </Menu>
            <ArrowDropDownIcon />
          
          <Button 
            onClick={handleChartTypeClick} size="small" variant="text" >
          
          {chartType}
        
          <ArrowDropDownIcon />
          </Button>

          <Menu
          anchorEl={anchorElType}
          keepMounted
          open={Boolean(anchorElType)}
          onClose={handleChartTypeClose}
        >
          <MenuItem onClick={()=> {
              setAnchorElType(null); setChartType("도넛형"); }}>
                  도넛형</MenuItem>
          <MenuItem onClick={()=> {
              setAnchorElType(null); setChartType("바형")}}>
                  바형</MenuItem>
        </Menu>
        </div>}
      />
      
      <CardActions>
      <FormGroup 
        row>
        <FormControlLabel
          control={
            <Checkbox 
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
              checked={checked.checkBox_Location} 
              onChange={handleChange} 
              name="checkBox_Location" />}
            label="지역"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={checked.checkBox_days} 
              onChange={handleChange} 
              name="checkBox_days" />}
            label="기간"
        />
        </FormGroup>
      </CardActions>
      <Divider />
      <CardContent>
        {chartType==="도넛형"&& 
          <ChartDounut 
          chartValue = {chartValue}
          data={userData}/>}
        {chartType === "바형"&&
          <ChartBar 
            chartValue={chartValue}/>}
      </CardContent>
    </Card>
  );
};

ChartTestMain_1_.propTypes = {
  className: PropTypes.string
};

export default ChartTestMain_1_;