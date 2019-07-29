import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AuthService from '../services/auth';
import Profile from './Profile'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/******************FUNCION */
function MenuAppBar(props) {

  const authService = new AuthService()
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {

   return (localStorage.getItem("loggedUser"))?setAuth(true):setAuth(false)
  
    //si el usuario e
    
   // loggedUser===(null||undefined)?setAuth(true):setAuth(false)
   //loggedUser?setAuth(true):setAuth(false)

    
  }, [props.history]);

  const handleLogout = (props) => {
    console.log("picado")
    authService
    .logout()
    .then(() => {
      localStorage.removeItem('loggedUser')
      console.log("fuera de sesion")
        //cuando desloguea manda a raiz
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }
  
  const classes = useStyles();
  
  const open = Boolean(anchorEl);

 

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
   
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
            <MenuIcon />
          </IconButton>
            
          <Typography variant="h6" className={classes.title}>
            Tripfixer
          </Typography>
         
          {localStorage.loggedUser && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
               
                <MenuItem onClick={handleClose}>Profile</MenuItem>

                <MenuItem onClick={handleClose}>My account</MenuItem>
                
               
                <MenuItem > 
                  <Profile/>
                </MenuItem>
              
              </Menu>
            </div>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  MenuAppBar