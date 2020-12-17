import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { removeSpellFromTabs } from "../actions/spellTabsActions"

const SpellTabsSide = () => {
  const createdTabs = useSelector((state) => state.spellTabs.spellTabsItems)

  const dispatch = useDispatch()

  const removeFromTabsHandler = (id) => {
    dispatch(removeSpellFromTabs(id))
  }

  return (
    <ListGroup variant='flush'>
      {createdTabs.map((tab) => {
        return (
          <ListGroup.Item
            className='d-flex justify-content-between align-items-center'
            key={tab.id}
          >
            <Link to={`/spell/${tab.id}`}>{tab.name}</Link>
            <i
              className='fas fa-times fa-sm tab-remover'
              onClick={() => removeFromTabsHandler(tab.id)}
            ></i>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default SpellTabsSide
