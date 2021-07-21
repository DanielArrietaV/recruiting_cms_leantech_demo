import React, { useContext } from 'react'
import { FormContext } from '../../../../context/formContext'

function Form() {
  const { handleChange, handleClear, handleSubmit, formValues } = useContext(FormContext)

  return (
    <div
      style={{
        backgroundColor: 'rgb(222, 222, 252)',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        height: '600px',
        borderRadius: '20px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}>
        <div style={{ margin: '20px', alignSelf: 'center' }}>
          <input placeholder="Name" onChange={handleChange} name="name" value={formValues.name}></input>
        </div>
        <div style={{ margin: '20px', alignSelf: 'center' }}>
          <input placeholder="Last Name" onChange={handleChange} name="lastname" value={formValues.lastname}></input>
        </div>
        <div style={{ margin: '20px', alignSelf: 'center' }}>
          <input placeholder="Email" onChange={handleChange} name="email" value={formValues.email}></input>
        </div>
        <div style={{ margin: '20px', alignSelf: 'center' }}>
          <input placeholder="Phone" onChange={handleChange} name="phone" value={formValues.phone}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
