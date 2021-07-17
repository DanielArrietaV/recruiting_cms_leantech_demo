import React from 'react'
import NotFoundPic from '../../assets/images/notfound.png'

function NotFound() {
  return (
    <div className="ui_notfound_container">
      <img src={NotFoundPic} alt="Not Found image" />
    </div>
  )
}

export default NotFound
