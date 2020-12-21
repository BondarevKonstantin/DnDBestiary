import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Button, ButtonGroup } from "react-bootstrap"
import axios from "axios"
import { deleteSpell } from "../actions/spellActions"
import { removeSpellFromTabs } from "../actions/spellTabsActions"
import parse from "html-react-parser"

const SpellScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [spell, setSpell] = useState({}, [history, match])

  useEffect(() => {
    const fetchSpell = async () => {
      const { data } = await axios.get(`/api/spells/${match.params.id}`)

      setSpell(data)
    }

    fetchSpell()
  }, [match])

  const setSpellHandler = () => {
    history.push(`/spell/${match.params.id}/edit`)
  }

  const removeSpellHandler = (id) => {
    if (window.confirm("Это действие нельзя отменить. Продолжить?")) {
      dispatch(removeSpellFromTabs(id))
      dispatch(deleteSpell(id))
      history.push("/")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>
              <strong>{spell.name}</strong>
            </Card.Title>
            {userInfo && userInfo.isAdmin ? (
              <ButtonGroup>
                <Button
                  variant='outline-info'
                  size='lg'
                  onClick={setSpellHandler}
                >
                  Редактировать заклинание
                </Button>
                <Button
                  variant='outline-danger'
                  size='lg'
                  onClick={() => removeSpellHandler(spell._id)}
                >
                  Удалить заклинание
                </Button>
              </ButtonGroup>
            ) : (
              ""
            )}
          </div>

          <Card.Text>
            <strong>Уровень: </strong>
            {spell.level}
          </Card.Text>

          <Card.Text>
            <strong>Школа: </strong>
            {spell.school}
          </Card.Text>

          <Card.Text>
            <strong>Время накладывания: </strong>
            {spell.timeCast}
          </Card.Text>

          <Card.Text>
            <strong>Дистанция: </strong>
            {spell.distance}
          </Card.Text>

          {spell.components ? (
            <>
              <strong>Компоненты: </strong>
              {parse(spell.components)}
            </>
          ) : (
            ""
          )}

          <Card.Text>
            <strong>Длительность: </strong>
            {spell.duration}
          </Card.Text>

          {spell.description ? (
            <>
              <h1 className='my-4 text-center'>---Описание---</h1>
              {parse(spell.description)}{" "}
            </>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default SpellScreen
