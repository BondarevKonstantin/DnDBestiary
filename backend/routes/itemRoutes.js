import express from "express"

import {
  getItems,
  getItemsById,
  deleteItem,
  updateItem,
  createItem,
} from "../controllers/itemController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getItems).post(protect, admin, createItem)
router
  .route("/:id")
  .get(getItemsById)
  .delete(protect, admin, deleteItem)
  .put(protect, admin, updateItem)

export default router
