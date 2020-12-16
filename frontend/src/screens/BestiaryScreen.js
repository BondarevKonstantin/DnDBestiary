import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const BestiaryScreen = () => {
  const [creatures, setCreatures] = useState([])

  useEffect(() => {
    const fetchCreatures = async () => {
      const { data } = await axios.get("/api/creatures")

      setCreatures(data)
    }

    fetchCreatures()
  }, [])

  return (
    <>
      <h1>Существа</h1>
      <div className='creatures-block'>
        <ul className='creatures-block-list'>
          {creatures.map((creature) => {
            return (
              <li className='creatures-block-list-item'>
                <Link to={`/creature/${creature._id}`}>
                  <strong>{creature.name}</strong>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default BestiaryScreen
