import express from "express"
import asyncHandler from "express-async-handler"
import Creature from "../models/creatureModel.js"

const router = express.Router()

// @desc Fetch all creatures
// @route GET /api/creatures
// @access Publuc
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const creatures = await Creature.find({})

    res.json(creatures)
  })
)

// @desc Fetch single creature
// @route GET /api/creatures/:id
// @access Publuc
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const creature = await Creature.findById(req.params.id)

    if (creature) {
      res.json(creature)
    } else {
      res.status(404).json({ message: "Creature not found" })
    }
  })
)

export default router
