import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../src/pages/Auth/Login'
import Index from '../src/pages/TechInterviewer/Index'

const AppTest = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/login/TechInterviewer" component={Index} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppTest
