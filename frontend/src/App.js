import React from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main className='py-4'>
        <Container>
          <h1>Добро пожаловать в бестиарий!</h1>
        </Container>
      </main>
    </>
  )
}

export default App
