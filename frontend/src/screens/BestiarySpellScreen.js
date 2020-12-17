import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listSpells } from "../actions/spellActions"
import { addSpellToTabs } from "../actions/spellTabsActions"
import { Link } from "react-router-dom"

import Message from "../components/Message"
import Loader from "../components/Loader"

const BestiarySpellScreen = () => {
  const dispatch = useDispatch()

  const spellList = useSelector((state) => state.spellList)
  const { loading, error, spells } = spellList

  const addToTabsHandler = (item) => {
    dispatch(addSpellToTabs(item))
  }

  useEffect(() => {
    dispatch(listSpells())
  }, [dispatch])

  return (
    <>
      {loading ? <h1>Собираем заклинания</h1> : <h1>Заклинания</h1>}
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
        <div className='spells-block'>
          <ul className='spells-block-list'>
            {spells.map((spell) => {
              return (
                <li
                  key={spell._id}
                  onClick={() => addToTabsHandler(spell._id)}
                  className='spells-block-list-item'
                >
                  <Link to={`/spell/${spell._id}`}>
                    <strong>{spell.name}</strong>
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

export default BestiarySpellScreen
