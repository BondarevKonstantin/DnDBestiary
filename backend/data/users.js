import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

const users = [
  {
    name: "Никитос",
    email: "NikitaTest@example.com",
    password: bcrypt.hashSync(process.env.ADM_PASS, 10),
    isAdmin: true,
  },
]

export default users
