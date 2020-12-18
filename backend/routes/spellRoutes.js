import express from "express"

import {
  getSpells,
  getSpellsById,
  deleteSpell,
} from "../controllers/spellController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getSpells)
router.route("/:id").get(getSpellsById).delete(protect, admin, deleteSpell)

export default router
