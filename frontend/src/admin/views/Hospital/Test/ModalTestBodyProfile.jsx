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

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const ModalTestBodyProfile = props => {

  const { className, hospitalData} = props

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
             {hospitalData.hospitalName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              병원 주소 : <br/> 
              {hospitalData.addr}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              병원 형태 : <br/>
              {hospitalData.hospitalType}
            </Typography>
          </div>
          {/* <Avatar
            className={classes.avatar}
            src={hospitalData.avatarUrl}
          /> */}
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
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
