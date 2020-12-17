import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ListGroup } from "react-bootstrap"

const TabsSide = () => {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>Бес</ListGroup.Item>
      <ListGroup.Item>Мантикора</ListGroup.Item>
      <ListGroup.Item>Никита</ListGroup.Item>
      <ListGroup.Item>Чемпион</ListGroup.Item>
    </ListGroup>
  )
}

export default TabsSide
