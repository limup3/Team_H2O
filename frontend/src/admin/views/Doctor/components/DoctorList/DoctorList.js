import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import mockData from './data';
import DoctorsTable from './DoctorsTable';
import { DoctorsToolbar } from './DoctordToolbar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DoctorList = () => {
  const classes = useStyles();

  const [doctors] = useState(mockData);

  return (
    <div className={classes.root}>
      <DoctorsToolbar />
      <div className={classes.content}>
        <DoctorsTable doctors={doctors} />
      </div>
    </div>
  );
};

export default DoctorList;
