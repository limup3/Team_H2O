import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ModalTestBodyProfile from './ModalTestBodyProfile';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const ModalTestBody = (props) => {
    const classes = useStyles();
    // const {posts}= props.posts
    const {posts, value} = props

    useEffect(()=>{
      console.log("바디에서 확인")
      // console.log(posts)
      console.log(posts)
      console.log(value)
    },[])
    // ------------------------------

    
    return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <ModalTestBodyProfile value={value} posts={posts}/>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          {/* <HospitalDetails hospitalData={props}/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalTestBody;
