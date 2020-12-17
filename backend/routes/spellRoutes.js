import express from "express"
import asyncHandler from "express-async-handler"
import Spell from "../models/spellModel.js"

const router = express.Router()

// @desc Fetch all spells
// @route GET /api/spells
// @access Publuc
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spells = await Spell.find({})

    res.json(spells)
  })
)

// @desc Fetch single spell
// @route GET /api/spells/:id
// @access Publuc
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const spell = await Spell.findById(req.params.id)

    if (spell) {
      res.json(spell)
    } else {
      res.status(404)
      throw new Error("Product not found")
    }
  })
)

export default router
