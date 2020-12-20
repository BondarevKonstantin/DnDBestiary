import mongoose from "mongoose"

const creatureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  armorClass: {
    type: String,
    required: true,
  },
  aligment: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  hits: {
    type: String,
    required: true,
  },
  danger: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  speedFlying: {
    type: String,
    required: true,
  },
  speedSwim: {
    type: String,
    required: true,
  },
  speedClimb: {
    type: String,
    required: true,
  },
  resistance: {
    type: String,
  },
  immunityToDamage: {
    type: String,
  },
  str: {
    type: String,
    required: true,
  },
  dex: {
    type: String,
    required: true,
  },
  con: {
    type: String,
    required: true,
  },
  int: {
    type: String,
    required: true,
  },
  wis: {
    type: String,
    required: true,
  },
  cha: {
    type: String,
    required: true,
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
    required: true,
  },
})

const Creature = mongoose.model("Creature", creatureSchema)

export default Creature
