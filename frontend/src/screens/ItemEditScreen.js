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
  const [type, setType] = useState("")
  const [typeAdditions, setTypeAdditions] = useState("")
  const [source, setSource] = useState("")
  const [rarity, setRarity] = useState("")
  const [text, setText] = useState("")
  const [attunement, setAttunement] = useState("")
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
        setType(item.type)
        setTypeAdditions(item.typeAdditions)
        setSource(item.source)
        setRarity(item.rarity)
        setText(item.text)
        setAttunement(item.attunement)
      }
    }
  }, [dispatch, history, itemId, item, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateItem({
        _id: itemId,
        name,
        type,
        typeAdditions,
        source,
        rarity,
        text,
        attunement,
      })
    )
  }

  return (
    <>
      <Link to='/items' className='btn btn-light my-3'>
        Назад
      </Link>
      <FormContainer>
        <h1>Редактор предмета</h1>
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
                placeholder='Введите название предмета'
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            <Form.Group controlId='type'>
              <Form.Label>Тип</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите тип'
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='typeAdditions'>
              <Form.Label>Тип боеприпасов</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите тип боеприпасов'
                value={typeAdditions}
                onChange={(e) => setTypeAdditions(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='rarity'>
              <Form.Label>Редкость</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите редкость'
                value={rarity}
                onChange={(e) => setRarity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='attunement'>
              <Form.Label>Настройка</Form.Label>
              <Form.Control
                type='text'
                placeholder='Укажите настройку предмета'
                value={attunement}
                onChange={(e) => setAttunement(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='text'>
              <Form.Label>Описание</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={text}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setText(data)
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
