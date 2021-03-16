import mongoose from "mongoose"

const spellSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
  },
  school: {
    type: String,
  },
  source: {
    type: String,
  },
  timeCast: {
    type: String,
  },
  distance: {
    type: String,
  },

  components: {
    type: String,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
  },
})

const Spell = mongoose.model("Spell", spellSchema)

export default Spell
