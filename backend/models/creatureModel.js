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
    type: Number,
    required: true,
  },
  danger: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  speedFlying: {
    type: Number,
    required: true,
  },
  speedSwim: {
    type: Number,
    required: true,
  },
  speedClimb: {
    type: Number,
    required: true,
  },
  resistance: {
    type: String,
  },
  immunityToDamage: {
    type: String,
  },
  str: {
    type: Number,
    required: true,
  },
  dex: {
    type: Number,
    required: true,
  },
  con: {
    type: Number,
    required: true,
  },
  int: {
    type: Number,
    required: true,
  },
  wis: {
    type: Number,
    required: true,
  },
  cha: {
    type: Number,
    required: true,
  },
  sav: [],
  skills: [],
  abilities: [],
  sense: [],
  languages: [],
  actions: [],
  description: {
    type: String,
    required: true,
  },
})

const Creature = mongoose.model("Creature", creatureSchema)

export default Creature
