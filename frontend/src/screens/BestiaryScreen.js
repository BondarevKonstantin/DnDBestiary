import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listCreatures } from "../actions/creatureActions"
import { Link } from "react-router-dom"

import Message from "../components/Message"
import Loader from "../components/Loader"

const BestiaryScreen = () => {
  const dispatch = useDispatch()

  const creatureList = useSelector((state) => state.creatureList)
  const { loading, error, creatures } = creatureList

  useEffect(() => {
    dispatch(listCreatures())
  }, [dispatch])

  return (
    <>
      {loading ? <h1>Собираем существ</h1> : <h1>Существа</h1>}
      {loading ? (
        <>
          <h2>
            <Loader />
          </h2>
        </>
      ) : error ? (
        <h3>
          <Message variant='danger'>{error}</Message>
        </h3>
      ) : (
        <div className='creatures-block'>
          <ul className='creatures-block-list'>
            {creatures.map((creature) => {
              return (
                <li key={creature._id} className='creatures-block-list-item'>
                  <Link to={`/creature/${creature._id}`}>
                    <strong>{creature.name}</strong>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}

export default BestiaryScreen
