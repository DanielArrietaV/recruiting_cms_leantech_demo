import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router'

const Logout = () => {
  const history = useHistory()
  const { setIsAuth } = useContext(AuthContext)
  const handleLogout = () => {
    setIsAuth(false)
    history.push('/')
  }
  return (
    <div className="iu_logout">
      {/* <button onClick={handleLogout}>Logout</button> */}
      <Button onClick={handleLogout} outline color="secondary">
        Log out
      </Button>{' '}
    </div>
  )
}

export default Logout
