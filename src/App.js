import React from 'react'
import MainRouter from './navigation'
import { Provider } from 'react-redux'
import store from './redux/store'
import AuthProvider from './context/authContext'
import ConfProvider from './context/confContext'

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ConfProvider>
          <MainRouter />
        </ConfProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
