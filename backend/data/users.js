import bcrypt from "bcryptjs"

const users = [
  {
    name: "Никитос",
    email: "NikitaTest@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
]

export default users
