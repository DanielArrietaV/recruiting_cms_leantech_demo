import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: () => null
})

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  const { children } = props

  const authValue = JSON.parse(window.localStorage.getItem('auth'))

  useEffect(() => {
    setIsAuth(authValue)
  }, [])

  const setAuthLocalStorage = (value) => {
    window.localStorage.setItem('auth', JSON.stringify(value))
    setIsAuth(value)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: setAuthLocalStorage
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
