import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Aside() {
  return (
    <div className="aside_menu_container">
      <ul className="aside_menu">
        <li>
          <Link to="/tech-interviewer">Tech Interviewer</Link>
        </li>
        <li>
          <Link to="/configuration">Configuration</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </div>
  )
}

export default Aside
