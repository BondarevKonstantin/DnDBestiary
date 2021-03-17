import asyncHandler from "express-async-handler"
import Item from "../models/itemModel.js"

// @desc Fetch all items
// @route GET /api/items
// @access Publuc
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({})

  res.json(items)
})

// @desc Fetch single item
// @route GET /api/items/:id
// @access Publuc

const getItemsById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id)

  if (item) {
    res.json(item)
  } else {
    res.status(404)
    throw new Error("Item not found")
  }
})

// @desc Delete single item
// @route DELETE /api/items/:id
// @access Private/admin
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id)

  if (item) {
    await item.remove()
    res.json({ message: "Item removed" })
  } else {
    res.status(404)
    throw new Error("Item not found")
  }
})

// @desc Create a item
// @route POST /api/items
// @access Private/admin
const createItem = asyncHandler(async (req, res) => {
  const item = new Item({
    name: "Имя",
    type: "",
    typeAdditions: "",
    rarity: "",
    text: "",
    source: "",
    attunement: "",
  })

  const createdItem = await item.save()
  res.status(201).json(createdItem)
})

// @desc Update a item
// @route PUT /api/items/:id
// @access Private/admin
const updateItem = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    typeAdditions,
    rarity,
    text,
    source,
    attunement,
  } = req.body

  const item = await Item.findById(req.params.id)

  if (item) {
    item.name = name
    item.type = type
    item.typeAdditions = typeAdditions
    item.rarity = rarity
    item.text = text
    item.source = source
    item.attunement = attunement

    const updatedItem = await item.save()
    res.json(updatedItem)
  } else {
    res.status(404)
    throw new Error("Item not found")
  }
})

export { getItems, getItemsById, deleteItem, createItem, updateItem }
