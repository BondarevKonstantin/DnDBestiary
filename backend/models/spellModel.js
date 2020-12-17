import mongoose from "mongoose"

const spellSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  timeCast: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  components: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Spell = mongoose.model("Spell", spellSchema)

export default Spell
