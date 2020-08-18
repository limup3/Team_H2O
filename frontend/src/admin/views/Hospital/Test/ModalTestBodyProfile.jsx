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
  const key = props.hospitalNo

  useEffect(()=>{
    console.log("프로필에서 확인")
    console.log(posts)
    console.log(value)
  },[])

  // const [posts, setposts] = useState({
  // hospitalNo: '',
  // hospitalName : '',
  // businessLicenseNumber: '',
  // addr: '',
  // logo: '',
  // hospitalType: '',
  // medicalPerson: '',
  // tel: '',
  // latitude: '',
  // longitude: ''})

  return (
    <Card
      key={value}
      // className={clsx(classes.root, className)}
    >
      {posts.hospitalNo}
    </Card>
  );
};

ModalTestBodyProfile.propTypes = {
  className: PropTypes.string
};

export default ModalTestBodyProfile;
