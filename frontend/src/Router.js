import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'
import HomeAppBar from './components/HomepageLayout'




export default function Router() {
  return (
    <BrowserRouter>

    <Switch>
      
      <Route exact path="/" component={HomeAppBar}/>
      
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/profile" component={Dashboard}/>

    </Switch>
    </BrowserRouter>
  )
}
