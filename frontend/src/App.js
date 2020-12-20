import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Row, Col, Card } from "react-bootstrap"
import Header from "./components/Header"
import TabsSide from "./components/TabsSide"
import SpellTabsSide from "./components/SpellTabsSide"
import BestiaryScreen from "./screens/BestiaryScreen"
import CreatureScreen from "./screens/CreatureScreen"
import CreatureEditScreen from "./screens/CreatureEditScreen"
import BestiarySpellScreen from "./screens/BestiarySpellScreen"
import SpellScreen from "./screens/SpellScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className='py-4 pl-2'>
        <Row>
          <Col md={2}>
            <Card>
              <Card.Body>
                <h3 className='text-center'>Ваши существа</h3>
                <TabsSide />
              </Card.Body>
            </Card>
            <Card className='mt-4'>
              <Card.Body>
                <h3 className='text-center'>Ваши заклинания</h3>
                <SpellTabsSide />
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/creatures' component={BestiaryScreen} />
            <Route path='/creature/:id' component={CreatureScreen} exact />
            <Route
              path='/creature/:id/edit/:new?'
              component={CreatureEditScreen}
            />
            <Route path='/spells' component={BestiarySpellScreen} />
            <Route path='/spell/:id' component={SpellScreen} />
          </Col>
        </Row>
      </main>
    </Router>
  )
}

export default App
