import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useGetDashboardInfo } from '../../../hooks/useGetDashboardInfo'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const { getDashboardInfo } = useGetDashboardInfo()

  useEffect(() => {
    getDashboardInfo()
  }, [getDashboardInfo])

  return (
    <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
      <Typography variant="h1">Dashboard 1</Typography>
      <h1>Hello</h1>
      <Link to="/tech-interviewer">
        Tech Interviewer Section
      </Link>
    </div>
  )
}
export default Dashboard
