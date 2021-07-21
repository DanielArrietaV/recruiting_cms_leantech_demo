import React from 'react'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import './styles.css'

function MainLayout(props) {
  const { children } = props
  return (
    <div className="main_layout_container">
      <Header />
      <div className="main_layout_body">
        <Aside />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
