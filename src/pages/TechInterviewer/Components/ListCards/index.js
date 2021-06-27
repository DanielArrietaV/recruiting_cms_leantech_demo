import React from 'react'
import Card from '../Card'
import './styles.css'

function Cards() {
  return (
    <div className="list_cards_container">
      <ul className="list_Cards">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  )
}

export default Cards
