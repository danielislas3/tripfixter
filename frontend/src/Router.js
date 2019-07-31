import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard'
import HomeAppBar from './components/HomepageLayout'
import Profile from './components/Profile';
import Lugares from './components/Lugares';




export default function Router() {
  return (
    <BrowserRouter>
    
    <Switch>
      
      <Route exact path="/" component={HomeAppBar}/>
      
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/lugares" component={Lugares}/>
    
    </Switch>
    </BrowserRouter>
  )
}
