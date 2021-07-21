import React, { useContext } from 'react'
import Button from '../../components/Button'
import { ConfContext } from '../../context/confContext'

function Configuration() {
  const { isConf, setIsConf } = useContext(ConfContext)

  const handleConf = () => {
    if (isConf === 'light') {
      setIsConf('dark')
    } else {
      setIsConf('light')
    }
  }

  const themeColor = () => {
    if (isConf === 'light') return 'yellow'
    else return 'black'
  }

  return (
    <div style={{ backgroundColor: themeColor(), width: '100%', display: 'flex' }}>
      <div style={{ width: '100px', alignItems: 'center' }}>
        <Button text="Theme" onClick={handleConf} />
      </div>
    </div>
  )
}

export default Configuration
