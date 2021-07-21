import React from 'react'
import MainRouter from './navigation'
import AuthProvider from './context/authContext'
import ConfProvider from './context/confContext'

const App = () => {
  return (
    <AuthProvider>
      <ConfProvider>
        <MainRouter />
      </ConfProvider>
    </AuthProvider>
  )
}

export default App
