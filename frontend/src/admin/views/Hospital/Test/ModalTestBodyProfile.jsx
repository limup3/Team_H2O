import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button
} from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {},
//   details: {
//     display: 'flex'
//   },
//   avatar: {
//     marginLeft: 'auto',
//     height: 110,
//     width: 100,
//     flexShrink: 0,
//     flexGrow: 0
//   },
//   progress: {
//     marginTop: theme.spacing(2)
//   },
//   uploadButton: {
//     marginRight: theme.spacing(2)
//   }
// }));

const ModalTestBodyProfile = props => {

  const {posts, value} = props

  useEffect(()=>{
    console.log("프로필에서 확인")
    console.log(posts)
    console.log(value)
    console.log(posts.addr)
  },[])
  
  // setPost(posts)
  return (
    <Card
      key={value}
    >
      <CardContent>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >{posts.addr}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              병원 주소 : <br/> 
              {/* {hospital.address} */}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              홈페이지 주소 : <br/>
              {/* {hospital.homepage} */}
            </Typography>
          </div>
          <Avatar
            // src={hospital.avatarUrl}
          />
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          variant="text"
        >
          사진 등록
        </Button>
        <Button variant="text">사진 삭제</Button>
      </CardActions>
    </Card>
  );
};

ModalTestBodyProfile.propTypes = {
  className: PropTypes.string
};

export default ModalTestBodyProfile;
