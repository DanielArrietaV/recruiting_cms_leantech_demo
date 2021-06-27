import React from 'react'
import logo from '../../assets/images/Logo.png'
import './styles.css'
import menulines from '../../assets/images/menu.png'

export default function Header() {
  return (
    <div className="header_container">
      <img className="aside_menu_lines" src={menulines} alt="Sidebar menu lines" />

      <img className="header_logo" src={logo} alt="Logo Leantech" />
    </div>
  )
}
