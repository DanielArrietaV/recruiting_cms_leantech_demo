import React, { useState, useEffect } from 'react'
import Card from '../Card'
import './styles.css'
import Loading from '../../../../components/Loading'
import { getApplicantsService } from '../../../../redux/applicants/services'

function Cards() {
  const [applicants, setApplicants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getApplicantsService()
      .then((res) => {
        setApplicants(res.data.result)
        setLoading(false)
      })
      .catch((e) => console.log(e))
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
