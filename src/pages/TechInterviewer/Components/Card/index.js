import React from 'react'
import './styles.css'

const Card = (props) => {
  const { item } = props
  return (
    <div className="card_main_container">
      <div className="card_main_avatar">
        <img className="card_user_img" src={item.avatar} alt="UserAvatar" />
      </div>
      <div className="card_info_container">
        <div className="card_main_username">
          <span>{item.name}</span>
          <span>{item.lastName}</span>
        </div>
        <p>{item.mainTechnology}</p>
        <p>{item.seniority}</p>
      </div>
    </div>
  )
}

export default Card
