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
    let sign = Math.floor(stat / 2) - 5 > 0 ? "+" : ""
    return `${stat} (${sign}${Math.floor(stat / 2) - 5})`
  }

  console.log(creature)

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
            (creature.size && creature.alignment)
              ? creature.size + ","
              : creature.size
              ? creature.size
              : ""
          } ${
            creature.type && creature.alignment
              ? creature.type + ","
              : creature.type
              ? creature.type
              : ""
          } ${creature.alignment ? creature.alignment : ""}`}</Card.Subtitle>

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

          {creature.speed ? (
            <Card.Text>
              <strong>Скорость: </strong>
              {creature.speed}
            </Card.Text>
          ) : (
            ""
          )}

          <Row>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Сила:</strong> {countAddition(creature.str)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Ловкость:</strong> {countAddition(creature.dex)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Телосложение:</strong> {countAddition(creature.con)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Интеллект:</strong> {countAddition(creature.int)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Мудрость:</strong> {countAddition(creature.wis)}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Харизма:</strong> {countAddition(creature.cha)}{" "}
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

              {creature.source ? (
                <Card.Text>
                  <strong>Источник:</strong> {creature.source}
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

          {creature.reaction ? (
            <>
              <h1 className='my-4 text-center'>---Реакции---</h1>

              {parse(creature.reaction)}
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

          {creature.lairEffects ? (
            <>
              <h1 className='my-4 text-center'>---Эффекты логова---</h1>

              {parse(creature.lairEffects)}
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

          {creature.add ? (
            <>
              <h1 className='my-4 text-center'>---Вариант---</h1>
              {parse(creature.add)}
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
