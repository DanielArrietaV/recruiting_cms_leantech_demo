import React from 'react'
import './styles.css'

function Filters() {
  return (
    <div className="tech_interviewer_filters">
      <h1>Filters</h1>
      <div className="filters_Input">
        <input placeholder="Main Technology" />
      </div>
      <div className="filters_Input">
        <input placeholder="Name" />
      </div>
      <div className="filters_Input">
        <input placeholder="Seniority" />
      </div>
      <div className="filters_Input">
        <input placeholder="Search" />
      </div>
    </div>
  )
}

export default Filters
