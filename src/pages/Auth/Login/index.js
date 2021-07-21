import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import './styles.css'
import Header from '../../../components/Header'
// import Pexels from '../../../assets/images/pexels-photo-3861958.jpeg'
import { initialLoginValues } from './components/helpers'

function Login() {
  const { setIsAuth } = useContext(AuthContext)

  const handleLogin = () => {
    setIsAuth(true)
  }

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const handleChange = (event) => {
    setLoginValues({ ...loginValues, [event.target.name]: event.target.value })
    console.log(loginValues)
  }

  // const handleClick = (event) => {
  //   console.log(loginValues)
  // }
  return (
    <>
      <Header />
      <div className="ui_login_main_container">
        <div className="ui_login_image">{/* <img src={Pexels} alt="Login image" /> */}</div>
        <div className="ui_login_container">
          <div className="ui_login_input">
            <Input placeholder="Email" name="email" onChange={handleChange} value={loginValues.email} />
          </div>
          <div className="ui_login_input">
            <Input
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={loginValues.password}
              type="password"
            />
          </div>
          <div className="ui_login_btn">
            <Button text="Sing In" onClick={handleLogin} />
          </div>
          <a>Forgot password?</a>
        </div>
      </div>
    </>
  )
}

export default Login
