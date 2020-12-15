import React from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import BestiaryScreen from "./screens/BestiaryScreen"

function App() {
  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <h1>Добро пожаловать в бестиарий!</h1>
          <BestiaryScreen />
        </Container>
      </main>
    </>
  )
}

export default App
