import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import { listCreatureDetails, updateCreature } from "../actions/creatureActions"
import { CREATURE_UPDATE_RESET } from "../constants/creatureConstants"

const CreatureEditScreen = ({ match, history }) => {
  const creatureId = match.params.id

  const [name, setName] = useState("")
  const [armorClass, setArmorClass] = useState("")
  const [aligment, setAligment] = useState("")
  const [type, setType] = useState("")
  const [size, setSize] = useState("")
  const [hits, setHits] = useState("")
  const [danger, setDanger] = useState("")
  const [speed, setSpeed] = useState("")
  const [speedFlying, setSpeedFlying] = useState("")
  const [speedSwim, setSpeedSwim] = useState("")
  const [speedClimb, setSpeedClimb] = useState("")
  const [resistance, setResistance] = useState("")
  const [immunityToDamage, setImmunityToDamage] = useState("")
  const [str, setStr] = useState("")
  const [dex, setDex] = useState("")
  const [con, setCon] = useState("")
  const [int, setInt] = useState("")
  const [wis, setWis] = useState("")
  const [cha, setCha] = useState("")
  const [sav, setSav] = useState("")
  const [abilities, setAbilities] = useState("")
  const [skills, setSkills] = useState("")
  const [sense, setSense] = useState("")
  const [languages, setLanguages] = useState("")
  const [actions, setActions] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const creatureDetails = useSelector((state) => state.creatureDetails)
  const { loading, error, creature } = creatureDetails

  const creatureUpdate = useSelector((state) => state.creatureUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = creatureUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CREATURE_UPDATE_RESET })
      history.push("/creatures")
    } else {
      if (!creature.name || creature._id !== creatureId) {
        dispatch(listCreatureDetails(creatureId))
      } else {
        setName(creature.name)
        setArmorClass(creature.armorClass)
        setAligment(creature.aligment)
        setType(creature.type)
        setSize(creature.size)
        setHits(creature.hits)
        setDanger(creature.danger)
        setSpeed(creature.speed)
        setSpeedFlying(creature.speedFlying)
        setSpeedSwim(creature.speedSwim)
        setSpeedClimb(creature.speedClimb)
        setResistance(creature.resistance)
        setImmunityToDamage(creature.immunityToDamage)
        setStr(creature.str)
        setDex(creature.dex)
        setCon(creature.con)
        setInt(creature.int)
        setWis(creature.wis)
        setCha(creature.cha)
        setSav(creature.sav)
        setAbilities(creature.abilities)
        setSkills(creature.skills)
        setSense(creature.sense)
        setLanguages(creature.languages)
        setActions(creature.actions)
        setDescription(creature.description)
      }
    }
  }, [dispatch, history, creatureId, creature, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateCreature({
        _id: creatureId,
        name,
        armorClass,
        aligment,
        type,
        size,
        hits,
        danger,
        speed,
        speedFlying,
        speedSwim,
        speedClimb,
        resistance,
        immunityToDamage,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        sav,
        abilities,
        skills,
        sense,
        languages,
        actions,
        description,
      })
    )
  }

  return (
    <>
      <Link to='/creatures' className='btn btn-light my-3'>
        Назад
      </Link>
      <FormContainer>
        <h1>Редактор существа</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type='name'
                placeholder='Введите имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='size'>
              <Form.Label>Размер</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите размер'
                value={size}
                onChange={(e) => setSize(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='type'>
              <Form.Label>Тип</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите тип существа'
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='aligment'>
              <Form.Label>Воззрение</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите воззрение'
                value={aligment}
                onChange={(e) => setAligment(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='armorClass'>
              <Form.Label>Броня</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите броню'
                value={armorClass}
                onChange={(e) => setArmorClass(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='hits'>
              <Form.Label>Хиты</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите хиты'
                value={hits}
                onChange={(e) => setHits(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='speed'>
              <Form.Label>Скорость</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите скорость'
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='speedFlying'>
              <Form.Label>Скорость в полете</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите скорость в полете'
                value={speedFlying}
                onChange={(e) => setSpeedFlying(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='speedSwim'>
              <Form.Label>Скорость в плавании</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите скорость в плавании'
                value={speedSwim}
                onChange={(e) => setSpeedSwim(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='speedClimb'>
              <Form.Label>Скорость ползком</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите скорость ползком'
                value={speedClimb}
                onChange={(e) => setSpeedClimb(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='str'>
              <Form.Label>Сила</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите силу'
                value={str}
                onChange={(e) => setStr(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='dex'>
              <Form.Label>Ловкость</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите ловкость'
                value={dex}
                onChange={(e) => setDex(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='con'>
              <Form.Label>Телосложение</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите телосложение'
                value={con}
                onChange={(e) => setCon(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='int'>
              <Form.Label>Интеллект</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите интеллект'
                value={int}
                onChange={(e) => setInt(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='wis'>
              <Form.Label>Мудрость</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите мудрость'
                value={wis}
                onChange={(e) => setWis(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='cha'>
              <Form.Label>Харизма</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите харизму'
                value={cha}
                onChange={(e) => setCha(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='resistance'>
              <Form.Label>Сопротивление к урону</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите сопротивляемость'
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='immunityToDamage'>
              <Form.Label>Иммунитеты</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите иммунитеты'
                value={immunityToDamage}
                onChange={(e) => setImmunityToDamage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='cha'>
              <Form.Label>Спасброски</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите спасброски'
                value={sav}
                onChange={(e) => setSav(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='skills'>
              <Form.Label>Навыки</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите навыки'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='sense'>
              <Form.Label>Чувства</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите чувства'
                value={sense}
                onChange={(e) => setSense(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='languages'>
              <Form.Label>Языки</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите языки'
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='danger'>
              <Form.Label>Опасность</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите опасность'
                value={danger}
                onChange={(e) => setDanger(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='abilities'>
              <Form.Label>Способности</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Введите способности'
                value={abilities}
                onChange={(e) => setAbilities(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='actions'>
              <Form.Label>Действия</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Введите действия'
                value={actions}
                onChange={(e) => setActions(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Введите описание'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
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

export default CreatureEditScreen
