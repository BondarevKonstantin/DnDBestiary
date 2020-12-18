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

export { getCreatures, getCreaturesById, deleteCreature }
