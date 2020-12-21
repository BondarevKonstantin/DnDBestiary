import asyncHandler from "express-async-handler"
import Creature from "../models/creatureModel.js"

// @desc Fetch all creatures
// @route GET /api/creatures
// @access Publuc
const getCreatures = asyncHandler(async (req, res) => {
  const creatures = await Creature.find({})

  res.json(creatures)
})

// @desc Fetch single creature
// @route GET /api/creatures/:id
// @access Publuc

const getCreaturesById = asyncHandler(async (req, res) => {
  const creature = await Creature.findById(req.params.id)

  if (creature) {
    res.json(creature)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

// @desc Delete single creature
// @route DELETE /api/creatures/:id
// @access Private/admin
const deleteCreature = asyncHandler(async (req, res) => {
  const creature = await Creature.findById(req.params.id)

  if (creature) {
    await creature.remove()
    res.json({ message: "Product removed" })
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

// @desc Create a creature
// @route POST /api/creatures
// @access Private/admin
const createCreature = asyncHandler(async (req, res) => {
  const creature = new Creature({
    name: "Имя",
    armorClass: "",
    aligment: "",
    type: "",
    size: "",
    hits: "",
    danger: "",
    speed: "",
    speedFlying: "",
    speedSwim: "",
    speedClimb: "",
    resistance: "",
    immunityToDamage: "",
    vulnerabilityToDamage: "",
    immunityToStatus: "",
    str: "10",
    dex: "10",
    con: "10",
    int: "10",
    wis: "10",
    cha: "10",
    sav: "",
    abilities: "",
    skills: "",
    sense: "",
    languages: "",
    actions: "",
    legendaryActions: "",
    lair: "",
    lairActions: "",
    description: "",
  })

  const createdCreature = await creature.save()
  res.status(201).json(createdCreature)
})

// @desc Update a creature
// @route PUT /api/creatures/:id
// @access Private/admin
const updateCreature = asyncHandler(async (req, res) => {
  const {
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
    lair,
    lairActions,
    description,
  } = req.body

  const creature = await Creature.findById(req.params.id)

  if (creature) {
    creature.armorClass = armorClass
    creature.name = name
    creature.aligment = aligment
    creature.type = type
    creature.size = size
    creature.hits = hits
    creature.danger = danger
    creature.speed = speed
    creature.speedFlying = speedFlying
    creature.speedSwim = speedSwim
    creature.speedClimb = speedClimb
    creature.resistance = resistance
    creature.immunityToDamage = immunityToDamage
    creature.vulnerabilityToDamage = vulnerabilityToDamage
    creature.immunityToStatus = immunityToStatus
    creature.str = str
    creature.dex = dex
    creature.con = con
    creature.int = int
    creature.wis = wis
    creature.cha = cha
    creature.sav = sav
    creature.abilities = abilities
    creature.skills = skills
    creature.sense = sense
    creature.languages = languages
    creature.actions = actions
    creature.legendaryActions = legendaryActions
    creature.lair = lair
    creature.lairActions = lairActions
    creature.description = description

    const updatedCreature = await creature.save()
    res.json(updatedCreature)
  } else {
    res.status(404)
    throw new Error("Creature not found")
  }
})

export {
  getCreatures,
  getCreaturesById,
  deleteCreature,
  createCreature,
  updateCreature,
}
