import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import AuthService from '../services/auth'
import useForm from '../hooks/useForm'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';







function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with ❤️ by Daniel Orio '}

    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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

export default function Signup(props) {
  const classes = useStyles();
  const [form, handleInput] = useForm()
  const authService = new AuthService()

  useEffect(()=>{
    
    const loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser) return props.history.push('/profile')
  },[props.history])

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(response)
        props.history.push('/login')
      })
      .catch(err => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(err.response)
        alert(err.response.data.msg || err.response.data.err.message)
      })
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormControl className={classes.form}>
       
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleInput}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="First Name"
                autoFocus
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>

              <TextField
                variant="outlined"
                
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
               
                autoComplete="email"
                onChange={handleInput}
                
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInput}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>
          <Button
           onClick={handleSignup}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={(
              form.name?false:true ,
              form.lastName?false:true,
              form.email?false:true,
              form.password?false:true
              )}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </FormControl>

      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}