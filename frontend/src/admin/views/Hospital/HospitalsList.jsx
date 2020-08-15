import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { HospitalsToolbar, HospitalsTable } from './components';
import mockData from './data';
import HospitalPagination from './components/HospitalPagination/HospitalPagination';
import { usePagination } from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const HospitalList = () => {
  const classes = useStyles();

  const [hospitals] = useState(mockData);

  return (
    <div className={classes.root}>
      <HospitalsToolbar />
      <div className={classes.content}>
        {/* <HospitalsTable hospitals={hospitals} /> */}
        <HospitalPagination/>
      </div>
    </div>
  );
};

export default HospitalList;
