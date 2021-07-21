import React, { useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../navigation/PrivateRoute'
import PublicRoute from '../navigation/PublicRoute'
import { AuthContext } from '../context/authContext'
// import { useManageAuth } from '../hooks/useManageAuth'

const MainRouter = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Switch>{isAuth === true ? <PrivateRoute /> : <PublicRoute />}</Switch>
    </BrowserRouter>
  )
}

export default MainRouter
