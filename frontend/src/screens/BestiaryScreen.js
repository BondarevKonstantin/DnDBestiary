import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { listCreatures, createCreature } from "../actions/creatureActions"
import { addToTabs } from "../actions/tabsActions"
import { Link } from "react-router-dom"

import { CREATURE_CREATE_RESET } from "../constants/creatureConstants"

import Message from "../components/Message"
import Loader from "../components/Loader"

const BestiaryScreen = ({ history }) => {
  const dispatch = useDispatch()

  const creatureList = useSelector((state) => state.creatureList)
  const userLogin = useSelector((state) => state.userLogin)
  const creatureCreate = useSelector((state) => state.creatureCreate)

  const { loading, error, creatures } = creatureList
  const { userInfo } = userLogin

  const { success: successCreate, creature: createdCreature } = creatureCreate

  const addToTabsHandler = (item) => {
    dispatch(addToTabs(item))
  }

  const createCreatureHandler = () => {
    dispatch(createCreature())
  }

  useEffect(() => {
    dispatch({ type: CREATURE_CREATE_RESET })

    if (successCreate) {
      history.push(`creature/${createdCreature._id}/edit/new`)
    }

    dispatch(listCreatures())
  }, [dispatch, history, successCreate, createdCreature])

  return (
    <>
      <div className='d-flex justify-content-between'>
        {loading ? <h1>Собираем существ</h1> : <h1>Существа</h1>}

        {userInfo && userInfo.isAdmin ? (
          <Button
            variant='outline-danger'
            size='lg'
            onClick={createCreatureHandler}
          >
            Создать существо
          </Button>
        ) : (
          ""
        )}
      </div>

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
                <li
                  key={creature._id}
                  onClick={() => addToTabsHandler(creature._id)}
                  className='creatures-block-list-item'
                >
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
