import React, { createContext, useState } from 'react'
import { initialFormValues } from '../pages/FormUse/helpers'

export const FormContext = createContext({
  formValues: initialFormValues,
  setFormValues: () => null,
  handleChange: () => null,
  handleClear: () => null,
  handleSubmit: () => null
})

const FormProvider = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const { children } = props

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }

  const handleClear = () => {
    if (formValues.name !== '' || formValues.lastname !== '' || formValues.email !== '' || formValues.phone !== '') {
      setFormValues(initialFormValues)
      console.log('button was clicked')
    }
  }

  const handleSubmit = () => {
    console.log(formValues)
  }

  return (
    <FormContext.Provider
      value={{
        formValues: formValues,
        setFormValues: setFormValues,
        handleChange: handleChange,
        handleClear: handleClear,
        handleSubmit: handleSubmit
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
