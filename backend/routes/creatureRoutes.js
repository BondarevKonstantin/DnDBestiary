import express from "express"

import {
  getCreatures,
  getCreaturesById,
  deleteCreature,
  updateCreature,
  createCreature,
} from "../controllers/creatureController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getCreatures).post(protect, admin, createCreature)
router
  .route("/:id")
  .get(getCreaturesById)
  .delete(protect, admin, deleteCreature)
  .put(protect, admin, updateCreature)

export default router
