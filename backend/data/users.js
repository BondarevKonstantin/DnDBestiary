import bcrypt from "bcryptjs"

const users = [
  {
    name: "Асташкин Никита",
    email: "NikitaTest@example.com",
    password: bcrypt.hashSync("GmAdmin", 10),
    isAdmin: true,
  },
]

export default users
