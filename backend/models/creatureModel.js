import mongoose from "mongoose"

const creatureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  armorClass: {
    type: String,
  },
  aligment: {
    type: String,
  },
  type: {
    type: String,
  },
  size: {
    type: String,
  },
  hits: {
    type: String,
  },
  danger: {
    type: String,
  },
  speed: {
    type: String,
  },
  speedFlying: {
    type: String,
  },
  speedSwim: {
    type: String,
  },
  speedClimb: {
    type: String,
  },
  resistance: {
    type: String,
  },
  immunityToDamage: {
    type: String,
  },
  str: {
    type: String,
  },
  dex: {
    type: String,
  },
  con: {
    type: String,
  },
  int: {
    type: String,
  },
  wis: {
    type: String,
  },
  cha: {
    type: String,
  },
  sav: {
    type: String,
  },
  skills: {
    type: String,
  },
  abilities: {
    type: String,
  },
  sense: {
    type: String,
  },
  languages: {
    type: String,
  },
  actions: {
    type: String,
  },
  description: {
    type: String,
  },
})

const Creature = mongoose.model("Creature", creatureSchema)

export default Creature
