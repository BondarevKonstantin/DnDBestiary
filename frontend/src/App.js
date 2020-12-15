import React from "react"
import { Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import BestiaryScreen from "./screens/BestiaryScreen"
import CreatureScreen from "./screens/CreatureScreen"

function App() {
  return (
    <Router>
      <Redirect to='/creatures' />
      <Header />
      <main className='py-4'>
        <Container>
          <Route path='/creatures' component={BestiaryScreen} exact />
          <Route path='/creature/:id' component={CreatureScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
