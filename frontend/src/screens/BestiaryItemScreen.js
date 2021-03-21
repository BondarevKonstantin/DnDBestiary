import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Form, ButtonGroup, Alert } from "react-bootstrap"
import { listItems, createItem } from "../actions/itemActions"
import { addItemToTabs } from "../actions/itemTabsActions"
import { Link } from "react-router-dom"

import { ITEM_CREATE_RESET } from "../constants/itemConstants"

import Message from "../components/Message"
import Loader from "../components/Loader"

import byField from "../utils/byField"
import sortItems from "../utils/sortItems"

const BestiaryItemScreen = ({ history }) => {
  const dispatch = useDispatch()

  const itemList = useSelector((state) => state.itemList)
  const userLogin = useSelector((state) => state.userLogin)
  const itemCreate = useSelector((state) => state.itemCreate)

  const { loading, error, items } = itemList
  const { userInfo } = userLogin

  const { success: successCreate, item: createdItem } = itemCreate

  const addToTabsHandler = (item) => {
    dispatch(addItemToTabs(item))
  }

  const createItemHandler = () => {
    dispatch(createItem())
  }

  useEffect(() => {
    dispatch({ type: ITEM_CREATE_RESET })

    if (successCreate) {
      history.push(`item/${createdItem._id}/edit/new`)
    }

    dispatch(listItems())
  }, [dispatch, history, successCreate, createdItem])

  const [itemsFilter, setItemsFilter] = useState("")
  const [sortingTag, setSortingTag] = useState("name")
  const [columns, setColumns] = useState(3)

  return (
    <>
      <div className='d-flex justify-content-between'>
        {loading ? (
          <h1>Находим волшебные предметы</h1>
        ) : (
          <h1>Волшебные предметы</h1>
        )}

        {loading ? (
          ""
        ) : (
          <ButtonGroup size='lg' className='mb-2'>
            <Button
              variant='outline-primary'
              onClick={() => setSortingTag("name")}
            >
              По названию
            </Button>
            <Button
              variant='outline-dark'
              onClick={() => setSortingTag("rarity")}
            >
              По редкости
            </Button>
          </ButtonGroup>
        )}

        {userInfo && userInfo.isAdmin ? (
          <Button
            variant='outline-danger'
            size='lg'
            onClick={createItemHandler}
          >
            Создать волшебный предмет
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
            controlId='formBasedItemFilter'
          >
            <Form.Control
              size='lg'
              type='text'
              placeholder='Введите название волшебного предмета'
              onChange={(e) => {
                setItemsFilter(e.target.value)
                if (e.target.value.length > 1) {
                  setColumns(1)
                } else {
                  setColumns(3)
                }
              }}
            />
          </Form.Group>

          <div className='items-block items-block' style={{ columns: columns }}>
            {sortItems(
              items.filter((item) =>
                item.name.toLowerCase().includes(itemsFilter.toLowerCase())
              ),
              sortingTag
            ).map((groupName) => {
              return (
                <>
                  <Alert key={groupName} variant='dark'>
                    {groupName}
                  </Alert>
                  <ul key={`ul-${groupName}`} className='items-block-list'>
                    {items
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .includes(itemsFilter.toLowerCase())
                      )
                      .sort(byField("name"))
                      .map((item) => {
                        return sortingTag === "rarity" ? (
                          item.rarity === groupName ? (
                            <li
                              key={item._id}
                              onClick={() => addToTabsHandler(item._id)}
                              className='items-block-list-item d-flex justify-content-between align-items-center'
                            >
                              <Link
                                key={`link-${item._id}`}
                                to={`/item/${item._id}`}
                              >
                                <strong>
                                  {item.name[0].toUpperCase() +
                                    item.name.slice(1)}
                                </strong>
                              </Link>
                              <i
                                className='fas fa-plus mr-3 plus'
                                onClick={() => addToTabsHandler(item._id)}
                              ></i>
                            </li>
                          ) : (
                            ""
                          )
                        ) : item.name[0].toUpperCase() === groupName ? (
                          <li
                            key={item._id}
                            onClick={() => addToTabsHandler(item._id)}
                            className='items-block-list-item d-flex justify-content-between align-items-center'
                          >
                            <Link
                              key={`link-${item._id}`}
                              to={`/item/${item._id}`}
                            >
                              <strong>
                                {item.name[0].toUpperCase() +
                                  item.name.slice(1)}
                              </strong>
                            </Link>
                            <i
                              className='fas fa-plus mr-3 plus'
                              onClick={() => addToTabsHandler(item._id)}
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

export default BestiaryItemScreen
