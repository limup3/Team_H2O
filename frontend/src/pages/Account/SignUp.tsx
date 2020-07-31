import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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


const SignUp = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleIdCheck = e => {
    e.preventDefault();
    axios.get(`http://localhost:8080/user/idCheck/${userId}`)
        .then(response => {
          alert("아이디가 존재합니다.")
          setUserId("")
        }).catch(error => {
          alert("아이디 생성 가능합니다")
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const userJson = {
      userId : userId,
      password : password,
      userName : userName,
      email : email,
      phoneNumber : phoneNumber
    }
    axios.post(`http://localhost:8080/user/signUp`, userJson)
        .then(response => {
            alert('성공')
        }).catch(
            error => {
              alert('실패')
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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userId"
                  label="UserId"
                  name="userId"
                  autoComplete="userId"
                  value = {userId}
                  onChange={e => setUserId(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}
                  container
                  direction="column"
                  alignItems="flex-end"
            >
              <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleIdCheck}
              >
                아이디<br/>
                중복 확인
              </Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="userName"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="UserName"
                autoFocus
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< Updated upstream
=======
                id="phoneNumber"
                label="PhoneNumber"
                name="phoneNumber"
                autoComplete="phoneNumber"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
>>>>>>> Stashed changes
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default SignUp