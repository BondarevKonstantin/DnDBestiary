import React from "react"
import creatures from "../creatures"

const BestiaryScreen = () => {
  return (
    <>
      <h1>Существа</h1>
      <div className='creatures-block'>
        <ul className='creatures-block-list'>
          {creatures.map((creature) => {
            return (
              <li className='creatures-block-list-item'>
                <a href={`/creature/${creature._id}`}>
                  <strong>{creature.name}</strong>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default BestiaryScreen
