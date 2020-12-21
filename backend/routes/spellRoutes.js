import express from "express"

import {
  getSpells,
  getSpellsById,
  deleteSpell,
  updateSpell,
  createSpell,
} from "../controllers/spellController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getSpells).post(protect, admin, createSpell)
router
  .route("/:id")
  .get(getSpellsById)
  .delete(protect, admin, deleteSpell)
  .put(protect, admin, updateSpell)

export default router
