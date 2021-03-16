import asyncHandler from "express-async-handler"
import Spell from "../models/spellModel.js"

// @desc Fetch all spells
// @route GET /api/spells
// @access Publuc
const getSpells = asyncHandler(async (req, res) => {
  const spells = await Spell.find({})

  res.json(spells)
})

// @desc Fetch single spell
// @route GET /api/spells/:id
// @access Publuc
const getSpellsById = asyncHandler(async (req, res) => {
  const spell = await Spell.findById(req.params.id)

  if (spell) {
    res.json(spell)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})

// @desc Delete single spell
// @route DELETE /api/spells/:id
// @access Private/admin
const deleteSpell = asyncHandler(async (req, res) => {
  const spell = await Spell.findById(req.params.id)

  if (spell) {
    await spell.remove()
    res.json({ message: "Spell removed" })
  } else {
    res.status(404)
    throw new Error("Spell not found")
  }
})

// @desc Create a spell
// @route POST /api/spells
// @access Private/admin
const createSpell = asyncHandler(async (req, res) => {
  const spell = new Spell({
    name: "Имя",
    level: "",
    school: "",
    source: "",
    timeCast: "",
    distance: "",
    components: "",
    duration: "",
    description: "",
  })

  const createdSpell = await spell.save()
  res.status(201).json(createdSpell)
})

// @desc Update a spell
// @route PUT /api/spells/:id
// @access Private/admin
const updateSpell = asyncHandler(async (req, res) => {
  const {
    name,
    level,
    school,
    source,
    timeCast,
    distance,
    components,
    duration,
    description,
  } = req.body

  const spell = await Spell.findById(req.params.id)

  if (spell) {
    spell.name = name
    spell.level = level
    spell.school = school
    spell.source = source
    spell.timeCast = timeCast
    spell.distance = distance
    spell.components = components
    spell.duration = duration
    spell.description = description

    const updatedSpell = await spell.save()
    res.json(updatedSpell)
  } else {
    res.status(404)
    throw new Error("Spell not found")
  }
})

export { getSpells, getSpellsById, deleteSpell, createSpell, updateSpell }
