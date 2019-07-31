import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Fotografos'
import HomeAppBar from './components/HomepageLayout'
import Profile from './components/Profile';
import Lugares from './components/Lugares';
import Fotografos from './components/Fotografos';




export default function Router() {
  return (
    <BrowserRouter>
    
    <Switch>
      
      <Route exact path="/" component={HomeAppBar}/>
      
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/fotografos" component={Fotografos}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/lugares" component={Lugares}/>
    
    </Switch>
    </BrowserRouter>
  )
}
