import React, { createContext, useEffect, useState } from 'react'

export const ConfContext = createContext({
  isConf: 'light',
  setIsConf: () => null
})

const ConfProvider = (props) => {
  const [isConf, setIsConf] = useState('light')
  const { children } = props

  const confValue = JSON.parse(window.localStorage.getItem('conf'))

  useEffect(() => {
    setIsConf(confValue)
  }, [])

  const setConfLocalStorage = (value) => {
    window.localStorage.setItem('conf', JSON.stringify(value))
    setIsConf(value)
  }

  return (
    <ConfContext.Provider
      value={{
        isConf: isConf,
        setIsConf: setConfLocalStorage
      }}
    >
      {children}
    </ConfContext.Provider>
  )
}

export default ConfProvider
