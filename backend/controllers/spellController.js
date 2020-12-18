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

export { getSpells, getSpellsById, deleteSpell }
