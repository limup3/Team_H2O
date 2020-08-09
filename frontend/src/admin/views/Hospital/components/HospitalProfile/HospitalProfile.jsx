import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
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

const HospitalProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: '연세 세브란스 병원',
    address: '서울 서대문구 연세로 50-1',
    homepage: 'https://sev.iseverance.com/index',
    phone: '304-428-3097',
    avatarUrl: '/admin_images/avatars/Hospital_Logo_1.png',
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
             {user.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              병원 주소 : <br/> 
              {user.address}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              홈페이지 주소 : <br/>
              {user.homepage}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={user.avatarUrl}
          />
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

HospitalProfile.propTypes = {
  className: PropTypes.string
};

export default HospitalProfile;
