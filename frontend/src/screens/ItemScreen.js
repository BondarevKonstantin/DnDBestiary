import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Button, ButtonGroup } from "react-bootstrap"
import axios from "axios"
import { deleteItem } from "../actions/itemActions"
import { removeItemFromTabs } from "../actions/itemTabsActions"
import parse from "html-react-parser"

const ItemScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [item, setItem] = useState({}, [history, match])

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`/api/items/${match.params.id}`)

      setItem(data)
    }

    fetchItem()
  }, [match])

  const setItemHandler = () => {
    history.push(`/item/${match.params.id}/edit`)
  }

  const removeItemHandler = (id) => {
    if (window.confirm("Это действие нельзя отменить. Продолжить?")) {
      dispatch(removeItemFromTabs(id))
      dispatch(deleteItem(id))
      history.push("/")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>
              <strong>{item.name}</strong>
            </Card.Title>
            {userInfo && userInfo.isAdmin ? (
              <ButtonGroup>
                <Button
                  variant='outline-info'
                  size='lg'
                  onClick={setItemHandler}
                >
                  Редактировать предмет
                </Button>
                <Button
                  variant='outline-danger'
                  size='lg'
                  onClick={() => removeItemHandler(item._id)}
                >
                  Удалить предмет
                </Button>
              </ButtonGroup>
            ) : (
              ""
            )}
          </div>

          <Card.Text>
            <strong>Источник: </strong>
            {item.source}
          </Card.Text>

          <Card.Text>
            <strong>Тип: </strong>
            {item.type}
          </Card.Text>

          {item.typeAdditions ? (
            <Card.Text>
              <strong>Тип боеприпасов: </strong>
              {parse(item.typeAdditions)}
            </Card.Text>
          ) : (
            ""
          )}

          <Card.Text>
            <strong>Редкость: </strong>
            {item.rarity}
          </Card.Text>

          {item.attunement ? (
            <Card.Text>
              <strong>Настройка: </strong>
              {parse(item.attunement)}
            </Card.Text>
          ) : (
            ""
          )}

          {item.text ? (
            <Card.Text>
              <strong>Описание: </strong>
              {parse(item.text)}
            </Card.Text>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default ItemScreen
