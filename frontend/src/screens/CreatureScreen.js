import React, { useState, useEffect } from "react"
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap"
import axios from "axios"

const CreatureScreen = ({ history, match }) => {
  const [creature, setCreature] = useState(
    {
      resistance: [],
      immunityToDamage: [],
      abilities: [],
      skills: [],
      sense: [],
      languages: [],
      actions: [],
    },
    [history, match]
  )

  useEffect(() => {
    const fetchCreature = async () => {
      const { data } = await axios.get(`/api/creatures/${match.params.id}`)

      setCreature(data)
    }

    fetchCreature()
  }, [match])

  const addCreatureHandler = () => {
    console.log(4)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>
              <strong>{creature.name}</strong>
            </Card.Title>
            <Button
              variant='outline-dark'
              size='lg'
              onClick={addCreatureHandler}
            >
              Добавить существо
            </Button>
          </div>

          <Card.Subtitle className='mb-2 text-muted'>{`${creature.size}, ${creature.type}, ${creature.aligment}`}</Card.Subtitle>

          <Card.Text>
            <strong>Класс доспеха: </strong>
            {creature.armorClass}
          </Card.Text>

          <Card.Text>
            <strong>Хиты: </strong>
            {creature.hits}
          </Card.Text>

          <Card.Text>
            <strong>Скорость:</strong>
            {creature.speed} фт
            {creature.speedFlying !== 0
              ? `, В полете ${creature.speedFlying} фт`
              : ""}
            {creature.speedSwim !== 0
              ? `, Плавая ${creature.speedSwim} фт`
              : ""}
            {creature.speedClimb !== 0
              ? `, Карабкаясь ${creature.speedClimb} фт`
              : ""}
          </Card.Text>
          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Сила: {creature.str} </ListGroup.Item>
                <ListGroup.Item>Ловкость: {creature.dex} </ListGroup.Item>
                <ListGroup.Item>Телосложение: {creature.con} </ListGroup.Item>
                <ListGroup.Item>Интеллект: {creature.int} </ListGroup.Item>
                <ListGroup.Item>Мудрость: {creature.wis} </ListGroup.Item>
                <ListGroup.Item>Харизма: {creature.cha} </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Card.Text>
                <strong>Сопротивление урону:</strong> {creature.resistance}
              </Card.Text>

              <Card.Text>
                <strong>Иммунитет к урону:</strong> {creature.immunityToDamage}
              </Card.Text>

              {creature.abilities.length !== 0 ? (
                <Card.Text>
                  <strong>Навыки:</strong>{" "}
                  {creature.abilities.map((ability) => {
                    return (
                      <span>
                        {" "}
                        {Object.keys(ability)} +{Object.values(ability)}{" "}
                      </span>
                    )
                  })}
                </Card.Text>
              ) : null}

              {creature.sense.length !== 0 ? (
                <Card.Text>
                  <strong>Чувства:</strong>{" "}
                  {creature.sense.map((sense) => {
                    return <span> {sense} </span>
                  })}
                </Card.Text>
              ) : null}

              {creature.languages.length !== 0 ? (
                <Card.Text>
                  <strong>Языки:</strong>{" "}
                  {creature.languages.map((language) => {
                    return <span> {language} </span>
                  })}
                </Card.Text>
              ) : null}

              <Card.Text>
                <strong>Опасность:</strong> {creature.danger}
              </Card.Text>
            </Col>
          </Row>

          <h1 className='my-4 text-center'>---Способности---</h1>
          {creature.skills.map((skill) => {
            return (
              <p>
                <strong>{Object.keys(skill)}: </strong>
                {Object.values(skill)}
              </p>
            )
          })}

          <h1 className='my-4 text-center'>---Действия---</h1>
          {creature.actions.map((action) => {
            return (
              <p>
                <strong>{Object.keys(action)}: </strong>
                {Object.values(action)}
              </p>
            )
          })}

          <h1 className='my-4 text-center'>---Описание---</h1>
          <p>{creature.description}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default CreatureScreen
