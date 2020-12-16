const express = require("express")
const creatures = require("./data/creatures")

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

app.listen(5000, console.log("Server running on port 5000"))
