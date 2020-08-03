import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserFindPW = () => {
  const classes = useStyles();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
  axios.get(`http://localhost:8080/user/findPw?userId=${userId}&name=${userName}&phone=${phoneNumber}`)
    .then(response => {
      alert('성공')
      console.log(response) 
      history.push("/ResetPw")
    }
    ).catch(
      error => {
        alert(`실패`)
        throw (error)
      }
    )
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h2" variant="h5">
          Find Password
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userId"
                  label="UserId"
                  name="userId"
                  autoComplete="userId"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="userName"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="userName"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="PhoneNumber"
                type="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
            </Grid>
          </Grid>
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Find
          </Button>
       
          <Grid container>
            <Grid item xs>
              <Link to="/UserFindID" >
                {"Find ID ?"}
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Login" >
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default UserFindPW