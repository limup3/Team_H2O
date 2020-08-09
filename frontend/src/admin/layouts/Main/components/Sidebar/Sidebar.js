import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import DvrIcon from '@material-ui/icons/Dvr';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: '통계(DashBoard)',
      href: '/admin/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: '사용자(Users)',
      href: '/admin/users',
      icon: <PeopleIcon />
    },
    {
      title: '병원(Hospital)',
      href: '/admin/hospital',
      icon: <LocalHospitalIcon />
    },
    {
      title: '게시판(Board)',
      href: '/admin/board',
      icon: <DvrIcon/>
    },
    // {
    //   title: '계정정보(Account)',
    //   href: '/admin/account',
    //   icon: <AccountBoxIcon />
    // },
    {
      title: '세팅(Settings)',
      href: '/admin/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={open}
      onClose={onClose}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
          open
          onClose
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
