import React from 'react'
import Logout from '../../components/LogoutButton'
import Filters from './components/Filters'
import ListCards from './components/ListCards'

import './styles.css'

function techInterviewer() {
  return (
    <div className="tech_interviewer_container">
      <div className="tech_interviewer_logout">
        <Logout />
      </div>
      <h1 className="tech_interviewer_title">New Applicants</h1>
      <div className="tech_interviewer_body">
        <Filters />
        <ListCards className="tech_interviewer_list" />
      </div>
    </div>
  )
}

export default techInterviewer
