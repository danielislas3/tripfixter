import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Home from './components/Home'

export default function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
    </BrowserRouter>
  )
}
