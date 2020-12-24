import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonGroup, Form, Alert } from "react-bootstrap"
import { listCreatures, createCreature } from "../actions/creatureActions"
import { addToTabs } from "../actions/tabsActions"
import { Link } from "react-router-dom"

import { CREATURE_CREATE_RESET } from "../constants/creatureConstants"

import Message from "../components/Message"
import Loader from "../components/Loader"

import byField from "../utils/byField"
import sortItems from "../utils/sortItems"

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

  const [creaturesFilter, setCreaturesFilter] = useState("")
  const [sortingTag, setSortingTag] = useState("danger")
  const [columns, setColumns] = useState(3)

  return (
    <>
      <div className='d-flex justify-content-between'>
        {loading ? <h1>Собираем существ</h1> : <h1>Существа</h1>}

        {loading ? (
          ""
        ) : (
          <ButtonGroup size='lg' className='mb-2'>
            <Button
              variant='outline-danger'
              onClick={() => setSortingTag("danger")}
            >
              По опасности
            </Button>
            <Button
              variant='outline-info'
              onClick={() => setSortingTag("name")}
            >
              По алфавиту
            </Button>
          </ButtonGroup>
        )}

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
        <>
          <Form.Group
            className='filter mt-2 mb-4'
            controlId='formBasedCreatureFilter'
          >
            <Form.Control
              size='lg'
              type='text'
              placeholder='Введите название существа'
              onChange={(e) => {
                setCreaturesFilter(e.target.value)
                if (e.target.value.length > 1) {
                  setColumns(1)
                } else {
                  setColumns(3)
                }
              }}
            />
          </Form.Group>

          <div
            className='creatures-block items-block'
            style={{ columns: columns }}
          >
            {sortItems(
              creatures.filter((creature) =>
                creature.name
                  .toLowerCase()
                  .includes(creaturesFilter.toLowerCase())
              ),
              sortingTag
            ).map((groupName) => {
              return (
                <>
                  <Alert key={groupName} variant='dark'>
                    {groupName}
                  </Alert>
                  <ul key={`ul-${groupName}`} className='creatures-block-list'>
                    {creatures
                      .filter((creature) =>
                        creature.name
                          .toLowerCase()
                          .includes(creaturesFilter.toLowerCase())
                      )
                      .sort(byField("name"))
                      .map((creature) => {
                        return sortingTag === "danger" ? (
                          creature.danger === groupName ? (
                            <li
                              key={creature._id}
                              onClick={() => addToTabsHandler(creature._id)}
                              className='creatures-block-list-item d-flex justify-content-between align-items-center'
                            >
                              <Link
                                key={`link-${creature._id}`}
                                to={`/creature/${creature._id}`}
                              >
                                <strong>
                                  {creature.name[0].toUpperCase() +
                                    creature.name.slice(1)}
                                </strong>
                              </Link>
                              <i
                                className='fas fa-plus mr-3 plus'
                                onClick={() => addToTabsHandler(creature._id)}
                              ></i>
                            </li>
                          ) : (
                            ""
                          )
                        ) : creature.name[0].toUpperCase() === groupName ? (
                          <li
                            key={creature._id}
                            onClick={() => addToTabsHandler(creature._id)}
                            className='creatures-block-list-item d-flex justify-content-between align-items-center'
                          >
                            <Link
                              key={`link-${creature._id}`}
                              to={`/creature/${creature._id}`}
                            >
                              <strong>
                                {creature.name[0].toUpperCase() +
                                  creature.name.slice(1)}
                              </strong>
                            </Link>
                            <i
                              className='fas fa-plus mr-3 plus'
                              onClick={() => addToTabsHandler(creature._id)}
                            ></i>
                          </li>
                        ) : (
                          ""
                        )
                      })}
                  </ul>
                </>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default BestiaryScreen
