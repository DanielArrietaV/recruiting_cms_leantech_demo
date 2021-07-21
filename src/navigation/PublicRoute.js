import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import NotFound from './../components/Errors/NotFound'

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={['/', '/login']} component={Login} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default PublicRoutes
