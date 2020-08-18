import React, {useState} from 'react';
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

  const {posts} = props
  const key = props.hospitalNo
  console.log("프로필에서 확인")
  console.log(posts)
  console.log("Key확인")
  console.log(key)
  console.log("props.hospitalNo 확인")
  console.log(posts.hospitalNo)
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
      key={key}
      // className={clsx(classes.root, className)}
    >
      
    </Card>
  );
};

ModalTestBodyProfile.propTypes = {
  className: PropTypes.string
};

export default ModalTestBodyProfile;
