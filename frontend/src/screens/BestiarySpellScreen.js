import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Form, ButtonGroup, Alert } from "react-bootstrap"
import { listSpells, createSpell } from "../actions/spellActions"
import { addSpellToTabs } from "../actions/spellTabsActions"
import { Link } from "react-router-dom"

import { SPELL_CREATE_RESET } from "../constants/spellConstants"

import Message from "../components/Message"
import Loader from "../components/Loader"

import byField from "../utils/byField"
import sortItems from "../utils/sortItems"

const BestiarySpellScreen = ({ history }) => {
  const dispatch = useDispatch()

  const spellList = useSelector((state) => state.spellList)
  const userLogin = useSelector((state) => state.userLogin)
  const spellCreate = useSelector((state) => state.spellCreate)

  const { loading, error, spells } = spellList
  const { userInfo } = userLogin

  const { success: successCreate, spell: createdSpell } = spellCreate

  const addToTabsHandler = (item) => {
    dispatch(addSpellToTabs(item))
  }

  const createSpellHandler = () => {
    dispatch(createSpell())
  }

  useEffect(() => {
    dispatch({ type: SPELL_CREATE_RESET })

    if (successCreate) {
      history.push(`spell/${createdSpell._id}/edit/new`)
    }

    dispatch(listSpells())
  }, [dispatch, history, successCreate, createdSpell])

  const [spellsFilter, setSpellsFilter] = useState("")
  const [sortingTag, setSortingTag] = useState("level")

  return (
    <>
      <div className='d-flex justify-content-between'>
        {loading ? <h1>Собираем заклинания</h1> : <h1>Заклинания</h1>}

        {loading ? (
          ""
        ) : (
          <ButtonGroup size='lg' className='mb-2'>
            <Button
              variant='outline-primary'
              onClick={() => setSortingTag("level")}
            >
              По уровню
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
            onClick={createSpellHandler}
          >
            Создать заклинание
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
            controlId='formBasedSpellFilter'
          >
            <Form.Control
              size='lg'
              type='text'
              placeholder='Введите название заклинания'
              onChange={(e) => setSpellsFilter(e.target.value)}
            />
          </Form.Group>

          <div className='spells-block items-block'>
            {sortItems(
              spells.filter((spell) =>
                spell.name.toLowerCase().includes(spellsFilter.toLowerCase())
              ),
              sortingTag
            ).map((groupName) => {
              return (
                <>
                  <Alert key={groupName} variant='dark'>
                    {sortingTag === "level"
                      ? groupName === "Заговор"
                        ? groupName
                        : "Уровень " + groupName
                      : groupName}
                  </Alert>
                  <ul key={`ul-${groupName}`} className='spells-block-list'>
                    {spells
                      .filter((spell) =>
                        spell.name
                          .toLowerCase()
                          .includes(spellsFilter.toLowerCase())
                      )
                      .sort(byField("name"))
                      .map((spell) => {
                        return sortingTag === "level" ? (
                          spell.level === groupName ? (
                            <li
                              key={spell._id}
                              onClick={() => addToTabsHandler(spell._id)}
                              className='spells-block-list-item d-flex justify-content-between align-items-center'
                            >
                              <Link
                                key={`link-${spell._id}`}
                                to={`/spell/${spell._id}`}
                              >
                                <strong>
                                  {spell.name[0].toUpperCase() +
                                    spell.name.slice(1)}
                                </strong>
                              </Link>
                              <i
                                className='fas fa-plus mr-3 plus'
                                onClick={() => addToTabsHandler(spell._id)}
                              ></i>
                            </li>
                          ) : (
                            ""
                          )
                        ) : spell.name[0].toUpperCase() === groupName ? (
                          <li
                            key={spell._id}
                            onClick={() => addToTabsHandler(spell._id)}
                            className='spells-block-list-item d-flex justify-content-between align-items-center'
                          >
                            <Link
                              key={`link-${spell._id}`}
                              to={`/spell/${spell._id}`}
                            >
                              <strong>
                                {spell.name[0].toUpperCase() +
                                  spell.name.slice(1)}
                              </strong>
                            </Link>
                            <i
                              className='fas fa-plus mr-3 plus'
                              onClick={() => addToTabsHandler(spell._id)}
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

export default BestiarySpellScreen
