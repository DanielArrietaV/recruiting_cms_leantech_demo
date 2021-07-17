import React from 'react'
import Form from './components/Form'
import FormProvider from '../../context/formContext'

function FormUse() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div>
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </div>
  )
}

export default FormUse
