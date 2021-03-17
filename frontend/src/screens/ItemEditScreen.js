import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import { listItemDetails, updateItem } from "../actions/itemActions"
import { ITEM_UPDATE_RESET } from "../constants/itemConstants"

import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const ItemEditScreen = ({ match, history }) => {
  const itemId = match.params.id

  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [school, setSchool] = useState("")
  const [source, setSource] = useState("")
  const [timeCast, setTimeCast] = useState("")
  const [distance, setDistance] = useState("")
  const [components, setComponents] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const itemDetails = useSelector((state) => state.itemDetails)
  const { loading, error, item } = itemDetails

  const itemUpdate = useSelector((state) => state.itemUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = itemUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ITEM_UPDATE_RESET })
      history.push("/items")
    } else {
      if (!item.name || item._id !== itemId) {
        dispatch(listItemDetails(itemId))
      } else {
        setName(item.name)
        setLevel(item.level)
        setSchool(item.school)
        setSource(item.source)
        setTimeCast(item.timeCast)
        setDistance(item.distance)
        setComponents(item.components)
        setDuration(item.duration)
        setDescription(item.description)
      }
    }
  }, [dispatch, history, itemId, item, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateItem({
        _id: itemId,
        name,
        level,
        school,
        source,
        timeCast,
        distance,
        components,
        duration,
        description,
      })
    )
  }

  return (
    <>
      <Link to='/items' className='btn btn-light my-3'>
        Назад
      </Link>
      <FormContainer>
        <h1>Редактор заклинания</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Название</Form.Label>
              <Form.Control
                type='name'
                placeholder='Введите название заклинания'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='school'>
              <Form.Label>Уровень заклинания</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите уровень заклинания'
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='school'>
              <Form.Label>Школа заклинания</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите школу заклинания'
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='source'>
              <Form.Label>Источник</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите источник'
                value={source}
                onChange={(e) => setSource(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='timeCast'>
              <Form.Label>Время накладывания</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите время накладывания'
                value={timeCast}
                onChange={(e) => setTimeCast(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='distance'>
              <Form.Label>Дистанция</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите дистанцию действия'
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='components'>
              <Form.Label>Компоненты</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={components}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setComponents(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='duration'>
              <Form.Label>Время действия</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите время действия'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Описание</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setDescription(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Отправить
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ItemEditScreen
