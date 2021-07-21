import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './styles.css'
import Arrow from '../../assets/images/expand_more_black_24dp.svg'
import PropTypes from 'prop-types'

function Select(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { placeholder = 'Select an option', value, name, onChange, options = [] } = props
  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <Dropdown className="ui_select" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="ui_select_toggle" tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}>
        <span>{value || placeholder}</span>
        <div className="dropdown_icon">
          <img src={Arrow} />
        </div>
      </DropdownToggle>
      <DropdownMenu>
        {options.map((item, index) => {
          return (
            <DropdownItem
              onClick={() => {
                onChange(name, item.option)
              }}
              key={index}
            >
              {item.option}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      id: PropTypes.string
    })
  ).isRequired,
  name: PropTypes.string.isRequired
}

export default Select
