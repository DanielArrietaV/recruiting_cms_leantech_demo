import React, { useState, useEffect } from 'react'
import Card from '../Card'
import './styles.css'
import { listOfApplicants } from '../../../../utils/mockData'
import Loading from '../../../../components/Loading'

function Cards() {
  const [applicants, setApplicants] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
      setApplicants(listOfApplicants)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (loading === true) {
    return (
      <div className="ui_spinner_container">
        <Loading />
      </div>
    )
  }

  return (
    <div className="list_cards_container">
      <ul className="list_Cards">
        {applicants.map((item, index) => {
          return (
            <li key={index}>
              <Card item={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cards
