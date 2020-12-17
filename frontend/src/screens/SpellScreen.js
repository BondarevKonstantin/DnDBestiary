import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import axios from "axios"

const SpellScreen = ({ match }) => {
  const [spell, setSpell] = useState({})

  useEffect(() => {
    const fetchSpell = async () => {
      const { data } = await axios.get(`/api/spells/${match.params.id}`)

      setSpell(data)
    }

    fetchSpell()
  }, [match])

  const addSpellHandler = () => {
    console.log(4)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>
              <strong>{spell.name}</strong>
            </Card.Title>
            <Button variant='outline-dark' size='lg' onClick={addSpellHandler}>
              Добавить заклинание
            </Button>
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

          <Card.Text>
            <strong>Компоненты: </strong>
            {spell.components}
          </Card.Text>

          <Card.Text>
            <strong>Длительность: </strong>
            {spell.duration}
          </Card.Text>

          <h1 className='my-4 text-center'>---Описание---</h1>
          <p>{spell.description}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default SpellScreen
