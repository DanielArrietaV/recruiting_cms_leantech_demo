import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

function Button(props) {
  const { onClick, text, buttonType = 'primary', size = 'normal' } = props
  return (
    <button className={`${buttonType}_${size}_ui_button `} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small'])
}

export default Button
