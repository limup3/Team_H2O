import React, {useState, useReducer} from 'react';
import clsx from 'clsx';
import {Card, CardHeader, CardContent, Menu, MenuItem, Button} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {ChartBody} from '../Charts';


const ChartHead = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [chartStyle, setChartStyle] = useState("도넛형")


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const DoughnutEvent = () => {
      setAnchorEl(null);
      ChartBody()
      }

    const BarEvent = () => {
      setAnchorEl(null);
      }

    const TotalEvent = () => {
      setAnchorEl(null);
      }

    
    return (
        <Card>
        <CardHeader
            action={
          <div>
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick} 
            size="small" 
            variant="text">
          {chartStyle}<ArrowDropDownIcon />
          </Button>
          <Menu
           id="simple-menu"
           anchorEl={anchorEl}
           keepMounted
           open={Boolean(anchorEl)}
           >
          <MenuItem onClick={()=>{DoughnutEvent()}}>도너츠형</MenuItem>
          <MenuItem onClick={()=>{BarEvent()}}>바형</MenuItem>
          <MenuItem onClick={()=>{TotalEvent()}}>종합형</MenuItem>
        </Menu>
        </div>}
        
        title="통계 Detail"
      />
    </Card>
    )}
export default ChartHead