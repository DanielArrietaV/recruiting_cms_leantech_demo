import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './../components/Errors/NotFound'
import MainLayout from '../containers/MainLayout'
import TechInterviewer from '../pages/TechInterviewer'
import RecruitmentProgress from '../pages/RecruitmentProgress'
import Configuration from '../pages/Configuration'
import FormUse from '../pages/FormUse'

const PrivateRoute = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={['/', '/tech-interviewer']} component={TechInterviewer} />
        <Route exact path={['/progress']} component={RecruitmentProgress} />
        <Route exact path={['/configuration']} component={Configuration} />
        <Route exact path={['/form']} component={FormUse} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  )
}

export default PrivateRoute
