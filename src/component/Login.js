import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import "../App.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signinBtn: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "black",
    '&:hover': {
        margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "black"
     },
  }
}));

export default function Login() {
    const [userlogin, setUserlogin] = useState({email:"", password:""});
    const classes = useStyles();

    function responseGoogle (response) {
        console.log(response);
        console.log(response.profileObj);
    }

    function login() {
        console.log('email',userlogin.email);
        console.log('password', userlogin.password);
      }

  return (
    <Container  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>{setUserlogin(prev => ({...prev, email:e.target.value}))}}
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
            onChange={(e)=>{setUserlogin(prev => ({...prev, password:e.target.value}))}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            className={classes.signinBtn}
            onClick={()=>login()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <br/>
            <div className="center-text">
                OR
                <br/>
                <GoogleLogin
                    clientId="949894065632-je92cejsr4kab7oi85gfn0f5cs13rham.apps.googleusercontent.com"
                    buttonText="Sign up with google"
                    onSuccess={()=>{responseGoogle()}}
                    onFailure={()=>{responseGoogle()}}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            
            <hr/>
          <Grid className="center-text">
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}