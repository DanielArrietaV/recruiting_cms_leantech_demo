import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

function Input(props) {
  const { value, name, onChange, placeholder, type } = props
  return (
    <div className="ui_input_container">
      <input className="ui_input" onChange={onChange} value={value} name={name} placeholder={placeholder} type={type} />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
