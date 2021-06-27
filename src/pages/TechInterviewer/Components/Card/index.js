import React from 'react'
import './styles.css'
import Avatar from '../../../../../src/assets/images/man.png'

const Card = () => {
  return (
    <div className="card_main_container">
      <div className="card_main_avatar">
        <img className="card_user_img" src={Avatar} alt="UserAvatar" />
      </div>
      <div className="card_info_container">
        <div className="card_main_username">
          <span>Name</span>
          <span>Last Name</span>
        </div>
        <p>Technology</p>
        <p>Seniority</p>
      </div>
    </div>
  )
}

export default Card
