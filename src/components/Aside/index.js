import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Aside() {
  return (
    <div className="aside_menu_container">
      <ul className="aside_menu">
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/">Data</Link>
        </li>
        <li>
          <Link to="/">Caledar</Link>
        </li>
      </ul>
    </div>
  )
}

export default Aside
