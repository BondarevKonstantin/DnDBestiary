import express from "express"
import dotenv from "dotenv"
import creatures from "./data/creatures.js"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/creatures", (req, res) => {
  res.json(creatures)
})

app.get("/api/creatures/:id", (req, res) => {
  const creature = creatures.find((c) => c._id === req.params.id)
  res.json(creature)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
