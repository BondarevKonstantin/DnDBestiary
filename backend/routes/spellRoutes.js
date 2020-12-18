import express from "express"

import { getSpells, getSpellsById } from "../controllers/spellController.js"

const router = express.Router()

router.route("/").get(getSpells)
router.route("/:id").get(getSpellsById)

export default router
