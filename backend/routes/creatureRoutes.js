import express from "express"

import {
  getCreatures,
  getCreaturesById,
} from "../controllers/creatureController.js"

const router = express.Router()

router.route("/").get(getCreatures)
router.route("/:id").get(getCreaturesById)

export default router
