import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory,Link} from "react-router-dom";



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

const ResetPW = (props) => {
  
  const classes = useStyles();
  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h2" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}> 
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="newPassword"
                  label="New Password"
                  name="newPassword"
                  autoComplete="newPassword"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  autoComplete="confirmPassword"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
              />
            </Grid>


            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Link to="/Login">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change
          </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
}
export default ResetPW