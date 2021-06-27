import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Dashboard from '../pages/Main/Dashboard'
import Login from './../pages/Auth/Login'
import TechInterviewer from '../pages/TechInterviewer/'
// import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/tech-interviewer" component={TechInterviewer} />
        <PublicRoute exact path={['/', '/auth', '/auth/login']} component={Login} />
        <PublicRoute exact path="/dashboard" component={Dashboard} />
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter
