import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { removeFromTabs } from "../actions/tabsActions"

const TabsSide = () => {
  const createdTabs = useSelector((state) => state.tabs.tabsItems)

  const dispatch = useDispatch()

  const removeFromTabsHandler = (id) => {
    dispatch(removeFromTabs(id))
  }

  return (
    <ListGroup variant='flush'>
      {createdTabs.map((tab) => {
        return (
          <ListGroup.Item
            className='d-flex justify-content-between align-items-center'
            key={tab.id}
          >
            <Link to={`/creature/${tab.id}`}>{tab.name}</Link>
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

export default TabsSide
