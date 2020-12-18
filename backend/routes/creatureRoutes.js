import express from "express"

import {
  getCreatures,
  getCreaturesById,
  deleteCreature,
} from "../controllers/creatureController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getCreatures)
router
  .route("/:id")
  .get(getCreaturesById)
  .delete(protect, admin, deleteCreature)

export default router
