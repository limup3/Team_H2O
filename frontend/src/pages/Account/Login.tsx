import React, { useState }  from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    // 로그인 아이콘 중앙정렬 (Sign in 아이콘)
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    // 로그인 아이콘 색상
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    // 폼 정렬
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    //SIGN IN 버튼 정렬
}));

const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
//액션

export const loginRequestAction = data => ({type: POST_LOGIN_REQUEST, payload:data})
//액션 생성기

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POST_LOGIN_REQUEST' : return action.payload
        default: return state;
    }
}
//리듀서

export const postLoginRequest = data => async dispatch => {
    axios.post(`http://localhost:8080/user/login`, data)
    .then(response => {
        dispatch(loginRequestAction(response.data))
        sessionStorage.setItem("userId", response.data.userId)
    }).catch(error => { throw(error) })
}
// dispatch redux

const Login = () => {
    const classes = useStyles();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();

    const handleLoginButton = e => {
        e.preventDefault()
        dispatch(postLoginRequest({userId: userId, password:password}))
        alert(`${userId}님 안녕하세요.`)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>

                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userId"
                        label="userId"
                        name="userId"
                        autoComplete="userId"
                        autoFocus
                        value={userId}
                        onChange={e => setUserId(e.target.value)}                       
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleLoginButton}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/User_FindID" >
                                {"Forgot id?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/SignUp" >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default Login