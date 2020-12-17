import mongoose from "mongoose"
import dotenv from "dotenv"
import creatures from "./data/creatures.js"
import users from "./data/users.js"
import spells from "./data/spells.js"
import Creature from "./models/creatureModel.js"
import User from "./models/userModel.js"
import Spell from "./models/spellModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Creature.deleteMany()
    await Spell.deleteMany
    await User.deleteMany()

    await User.insertMany(users)
    await Creature.insertMany(creatures)
    await Spell.insertMany(spells)

    console.log("Data imported!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Creature.deleteMany()
    await User.deleteMany()
    await Spell.deleteMany()

    console.log("Data destroyed!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
