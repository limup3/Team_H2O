import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {chartView_7,chartView_15,chartView_30} from './chart'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Menu,
  MenuItem 
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';
import { Link } from 'react-router-dom';
import { DoughnutChart, BarChart, MixedChart } from './Charts/ChartBody';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [chartType, setChartType] = useState("도넛형")
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
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
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("도넛형")}}>도넛형</MenuItem>
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("바형")}}>바형</MenuItem>
          <MenuItem onClick={()=> {setAnchorEl(null); setChartType("종합형")}}>종합형</MenuItem>
        </Menu>
        </div>}
        
        title="이용자수 통계(Latest Sales)"
      />
      <Divider />
      <CardContent>
        {chartType === "도넛형" ?  <DoughnutChart/>: chartType === "바형"? <BarChart/>: <MixedChart/>}
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Link
          color="primary"
          size="small"
          variant="text"
          to="/admin/OverViewSales"
        >
          자세히 보기(Overview) <ArrowRightIcon />
        </Link>
      </CardActions>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;