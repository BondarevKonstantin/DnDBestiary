import mongoose from "mongoose"

const creatureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  armorClass: {
    type: String,
  },
  alignment: {
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
  resistance: {
    type: String,
  },
  immunityToDamage: {
    type: String,
  },
  vulnerabilityToDamage: {
    type: String,
  },
  immunityToStatus: {
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
  legendaryActions: {
    type: String,
  },
  reaction: {
    type: String,
  },
  lair: {
    type: String,
  },
  lairActions: {
    type: String,
  },
  lairEffects: {
    type: String,
  },
  description: {
    type: String,
  },
  add: {
    type: String,
  },
})

const Creature = mongoose.model("Creature", creatureSchema)

export default Creature
