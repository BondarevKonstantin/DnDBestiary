import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import { listCreatureDetails, updateCreature } from "../actions/creatureActions"
import { CREATURE_UPDATE_RESET } from "../constants/creatureConstants"

import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const CreatureEditScreen = ({ match, history }) => {
  const creatureId = match.params.id

  const [name, setName] = useState("")
  const [armorClass, setArmorClass] = useState("")
  const [alignment, setAlignment] = useState("")
  const [type, setType] = useState("")
  const [size, setSize] = useState("")
  const [hits, setHits] = useState("")
  const [danger, setDanger] = useState("")
  const [source, setSource] = useState("")
  const [speed, setSpeed] = useState("")
  const [resistance, setResistance] = useState("")
  const [immunityToDamage, setImmunityToDamage] = useState("")
  const [vulnerabilityToDamage, setVulnerabilityToDamage] = useState("")
  const [immunityToStatus, setImmunityToStatus] = useState("")
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
  const [legendaryActions, setLegendaryActions] = useState("")
  const [reaction, setReaction] = useState("")
  const [lair, setLair] = useState("")
  const [lairActions, setLairActions] = useState("")
  const [lairEffects, setLairEffects] = useState("")
  const [description, setDescription] = useState("")
  const [add, setAdd] = useState("")
  const dispatch = useDispatch()

  const creatureDetails = useSelector((state) => state.creatureDetails)
  const { loading, error, creature } = creatureDetails

  console.log(creature)

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
        setAlignment(creature.alignment)
        setType(creature.type)
        setSize(creature.size)
        setHits(creature.hits)
        setDanger(creature.danger)
        setSource(creature.source)
        setSpeed(creature.speed)
        setResistance(creature.resistance)
        setImmunityToDamage(creature.immunityToDamage)
        setVulnerabilityToDamage(creature.vulnerabilityToDamage)
        setImmunityToStatus(creature.immunityToStatus)
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
        setLegendaryActions(creature.legendaryActions)
        setReaction(creature.reaction)
        setLair(creature.lair)
        setLairActions(creature.lairActions)
        setLairEffects(creature.lairEffects)
        setDescription(creature.description)
        setAdd(creature.add)
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
        alignment,
        type,
        size,
        hits,
        danger,
        source,
        speed,
        resistance,
        immunityToDamage,
        vulnerabilityToDamage,
        immunityToStatus,
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
        legendaryActions,
        reaction,
        lair,
        lairActions,
        lairEffects,
        description,
        add,
      })
    )
  }

  console.log(description)

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

            <Form.Group controlId='alignment'>
              <Form.Label>Воззрение</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите воззрение'
                value={alignment}
                onChange={(e) => setAlignment(e.target.value)}
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

            <Form.Group controlId='vulnerabilityToDamage'>
              <Form.Label>Уязвимость к урону</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите уязвимость к урону'
                value={vulnerabilityToDamage}
                onChange={(e) => setVulnerabilityToDamage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='immunityToStatus'>
              <Form.Label>Иммунитеты к статусам</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите иммунитеты к статусам'
                value={immunityToStatus}
                onChange={(e) => setImmunityToStatus(e.target.value)}
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

            <Form.Group controlId='source'>
              <Form.Label>Источник</Form.Label>
              <Form.Control
                type='text'
                placeholder='Введите источник'
                value={source}
                onChange={(e) => setSource(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='abilities'>
              <Form.Label>Способности</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={abilities || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setAbilities(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='actions'>
              <Form.Label>Действия</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={actions || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setActions(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='legendaryActions'>
              <Form.Label>Легендарные действия</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={legendaryActions || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setLegendaryActions(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='reaction'>
              <Form.Label>Реакции</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={reaction || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setReaction(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='lair'>
              <Form.Label>Логово</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={lair || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setLair(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='lairActions'>
              <Form.Label>Действия логова</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={lairActions || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setLairActions(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='lairEffects'>
              <Form.Label>Эффекты логова</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={lairEffects || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setLairEffects(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Описание</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={description || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setDescription(data)
                  }}
                ></CKEditor>
              </div>
            </Form.Group>

            <Form.Group controlId='add'>
              <Form.Label>Вариант</Form.Label>
              <div className='editor'>
                <CKEditor
                  editor={ClassicEditor}
                  data={add || ""}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setAdd(data)
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

export default CreatureEditScreen
