import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Card, Button, ButtonGroup } from "react-bootstrap"
import axios from "axios"
import { deleteCreature } from "../actions/creatureActions"
import { removeFromTabs } from "../actions/tabsActions"
import parse from "html-react-parser"

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

  const countAddition = (stat) => {
    switch (Number(stat)) {
      case 8:
      case 9:
        return `${stat} (-1)`
      case 10:
      case 11:
        return `${stat} (0)`
      case 12:
      case 13:
        return `${stat} (+1)`
      case 14:
      case 15:
        return `${stat} (+2)`
      case 16:
      case 17:
        return `${stat} (+3)`
      case 18:
      case 19:
        return `${stat} (+4)`
      case 20:
      case 21:
        return `${stat} (+5)`
      case 22:
      case 23:
        return `${stat} (+6)`
      case 24:
      case 25:
        return `${stat} (+7)`
      case 26:
      case 27:
        return `${stat} (+8)`
      case 28:
      case 29:
        return `${stat} (+9)`
      case 30:
      case 31:
        return `${stat} (+10)`
      default:
        return ""
    }
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

          <Card.Subtitle className='mb-2 text-muted'>{`${
            (creature.size && creature.type) ||
            (creature.size && creature.aligment)
              ? creature.size + ","
              : creature.size
              ? creature.size
              : ""
          } ${
            creature.type && creature.aligment
              ? creature.type + ","
              : creature.type
              ? creature.type
              : ""
          } ${creature.aligment ? creature.aligment : ""}`}</Card.Subtitle>

          {creature.armorClass ? (
            <Card.Text>
              <strong>Класс доспеха: </strong>
              {creature.armorClass}
            </Card.Text>
          ) : (
            ""
          )}

          {creature.hits ? (
            <Card.Text>
              <strong>Хиты: </strong>
              {creature.hits}
            </Card.Text>
          ) : (
            ""
          )}

          {creature.speed ||
          creature.speedFlying ||
          creature.speedSwim ||
          creature.speedClimb ? (
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
          ) : (
            ""
          )}

          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  Сила: {countAddition(creature.str)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Ловкость: {countAddition(creature.dex)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Телосложение: {countAddition(creature.con)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Интеллект: {countAddition(creature.int)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Мудрость: {countAddition(creature.wis)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Харизма: {countAddition(creature.cha)}{" "}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              {creature.resistance ? (
                <Card.Text>
                  <strong>Сопротивление урону:</strong> {creature.resistance}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.immunityToDamage ? (
                <Card.Text>
                  <strong>Иммунитет к урону:</strong>{" "}
                  {creature.immunityToDamage}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.vulnerabilityToDamage ? (
                <Card.Text>
                  <strong>Уязвимость к урону:</strong>{" "}
                  {creature.vulnerabilityToDamage}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.immunityToStatus ? (
                <Card.Text>
                  <strong>Иммунитет к статусам:</strong>{" "}
                  {creature.immunityToStatus}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.sav ? (
                <Card.Text>
                  <strong>Спасброски:</strong> {creature.sav}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.skills ? (
                <Card.Text>
                  <strong>Навыки:</strong> {creature.skills}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.sense ? (
                <Card.Text>
                  <strong>Чувства:</strong> {creature.sense}
                </Card.Text>
              ) : (
                ""
              )}

              {creature.danger ? (
                <Card.Text>
                  <strong>Опасность:</strong> {creature.danger}
                </Card.Text>
              ) : (
                ""
              )}
            </Col>
          </Row>

          {creature.abilities ? (
            <>
              <h1 className='my-4 text-center'>---Способности---</h1>

              {parse(creature.abilities)}
            </>
          ) : (
            ""
          )}

          {creature.actions ? (
            <>
              <h1 className='my-4 text-center'>---Действия---</h1>

              {parse(creature.actions)}
            </>
          ) : (
            ""
          )}

          {creature.legendaryActions ? (
            <>
              <h1 className='my-4 text-center'>---Легендарные действия---</h1>

              {parse(creature.legendaryActions)}
            </>
          ) : (
            ""
          )}

          {creature.lair ? (
            <>
              <h1 className='my-4 text-center'>---Логово---</h1>
              {parse(creature.lair)}
            </>
          ) : (
            ""
          )}

          {creature.lairActions ? (
            <>
              <h1 className='my-4 text-center'>---Действия логова---</h1>

              {parse(creature.lairActions)}
            </>
          ) : (
            ""
          )}

          {creature.description ? (
            <>
              <h1 className='my-4 text-center'>---Описание---</h1>
              {parse(creature.description)}
            </>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default CreatureScreen
