import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ModalTestBodyProfile from './ModalTestBodyProfile';
import ModalTestBodyDetail from './ModalTestBodyDetail';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const ModalTestBody = (props) => {
    const classes = useStyles();
    // const {posts}= props.posts
    const {hospitalData} = props

    // ------------------------------

    
    return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={8}
          md={8}
          xl={8}
          xs={12}
        >
          {/* <ModalTestBodyProfile hospitalData={hospitalData}/> */}
          {/* 모달 자체 띄우기 */}
          <ModalTestBodyDetail hospitalData={hospitalData}/>






        </Grid>
        {/* <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <ModalTestBodyDetail hospitalData={hospitalData}/>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ModalTestBody;
