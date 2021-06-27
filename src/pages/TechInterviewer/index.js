import React from 'react'
import Filters from './Components/Filters'
import ListCards from './Components/ListCards'
import './styles.css'
import MainLayout from '../../containers/MainLayout'

function techInterviewer() {
  return (
    <MainLayout>
      <div className="tech_interviewer_container">
        <h1 className="tech_interviewer_title">New Applicants</h1>
        <div className="tech_interviewer_body">
          <Filters />
          <ListCards className="tech_interviewer_list" />
        </div>
      </div>
    </MainLayout>
  )
}

export default techInterviewer
