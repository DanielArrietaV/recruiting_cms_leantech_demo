import React from 'react'
import { Spinner } from 'reactstrap'

function Loading() {
  return (
    <div className="ui_spinner_container">
      <Spinner style={{ width: '3rem', height: '3rem' }}>{''}</Spinner>
    </div>
  )
}

export default Loading
