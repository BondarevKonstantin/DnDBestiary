import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Card, Button, ButtonGroup } from "react-bootstrap"
import axios from "axios"
import { deleteCreature } from "../actions/creatureActions"
import { removeFromTabs } from "../actions/tabsActions"

const CreatureScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [creature, setCreature] = useState({}, [history, match])

  useEffect(() => {
    const fetchCreature = async () => {
      const { data } = await axios.get(`/api/creatures/${match.params.id}`)

      setCreature(data)
    }

    fetchCreature()
  }, [match])

  const editCreatureHandler = () => {
    history.push(`/creature/${match.params.id}/edit`)
  }

  const removeCreatureHandler = (id) => {
    if (window.confirm("Это действие нельзя отменить. Продолжить?")) {
      dispatch(removeFromTabs(id))
      dispatch(deleteCreature(id))
      history.push("/")
    }
  }

  const prepareInfo = (data) => {
    let preparedData = []
    let splitData = data.split("|")
    splitData.forEach((element) => {
      preparedData.push(element.split(":"))
    })
    return preparedData
  }

  let creatureAbilities = ""
  let creatureActions = ""

  if (creature.abilities && creature.actions) {
    creatureAbilities = prepareInfo(creature.abilities)
    creatureActions = prepareInfo(creature.actions)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>
              <strong>{creature.name}</strong>
            </Card.Title>
            {userInfo && userInfo.isAdmin ? (
              <ButtonGroup>
                <Button
                  variant='outline-info'
                  size='lg'
                  onClick={editCreatureHandler}
                >
                  Редактировать существо
                </Button>
                <Button
                  variant='outline-danger'
                  size='lg'
                  onClick={() => removeCreatureHandler(creature._id)}
                >
                  Удалить существо
                </Button>
              </ButtonGroup>
            ) : (
              ""
            )}
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

              <Card.Text>
                <strong>Спасброски:</strong> {creature.sav}
              </Card.Text>

              <Card.Text>
                <strong>Навыки:</strong> {creature.skills}
              </Card.Text>

              <Card.Text>
                <strong>Чувства:</strong> {creature.sense}
              </Card.Text>

              <Card.Text>
                <strong>Опасность:</strong> {creature.danger}
              </Card.Text>
            </Col>
          </Row>

          <h1 className='my-4 text-center'>---Способности---</h1>
          {creatureAbilities ? (
            <>
              {creatureAbilities.map((ability) => {
                return (
                  <p key={`p-ability-${ability[0]}`}>
                    <strong>{ability[0]}: </strong>
                    {ability[1]}
                  </p>
                )
              })}
            </>
          ) : (
            ""
          )}

          <h1 className='my-4 text-center'>---Действия---</h1>
          {creatureActions ? (
            <>
              {creatureActions.map((action) => {
                return (
                  <p key={`p-action-${action[0]}`}>
                    <strong>{action[0]}: </strong>
                    {action[1]}
                  </p>
                )
              })}
            </>
          ) : (
            ""
          )}

          <h1 className='my-4 text-center'>---Описание---</h1>
          <p>{creature.description}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default CreatureScreen
