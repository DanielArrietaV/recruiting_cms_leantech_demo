import React, { useState } from 'react'
import './styles.css'
import { initialFilterValues, technologyOptions, seniorityOptions } from '../../helpers'
import Button from '../../../../components/Button'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'

function Filters() {
  const [filterValues, setFilterValues] = useState(initialFilterValues)
  const handleChange = (event) => {
    setFilterValues({ ...filterValues, [event.target.name]: event.target.value })
  }
  const handleClick = () => {
    console.log('entro')
  }
  const handleSelect = (name, value) => {
    setFilterValues({ ...filterValues, [name]: value })
  }

  console.log(filterValues)
  return (
    <div className="tech_interviewer_filters">
      <h1>Filters</h1>
      <div className="filters_fields_container">
        <Select
          placeholder="Main Technology"
          options={technologyOptions}
          value={filterValues.technology}
          name="technology"
          onChange={handleSelect}
        />
      </div>
      <div className="filters_fields_container">
        <Input value={filterValues.name} name="name" onChange={handleChange} placeholder="Name" />
      </div>
      <div className="filters_fields_container">
        <Select
          placeholder="Seniority"
          options={seniorityOptions}
          value={filterValues.seniority}
          name="seniority"
          onChange={handleSelect}
        />
      </div>
      <div className="filters_search_button">
        <Button text="Search" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Filters
