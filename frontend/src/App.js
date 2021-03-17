import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Row, Col, Card } from "react-bootstrap"
import Header from "./components/Header"
import TabsSide from "./components/TabsSide"
import SpellTabsSide from "./components/SpellTabsSide"
import ItemTabsSide from "./components/ItemTabsSide"
import BestiaryScreen from "./screens/BestiaryScreen"
import CreatureScreen from "./screens/CreatureScreen"
import CreatureEditScreen from "./screens/CreatureEditScreen"
import BestiarySpellScreen from "./screens/BestiarySpellScreen"
import SpellScreen from "./screens/SpellScreen"
import SpellEditScreen from "./screens/SpellEditScreen"
import BestiaryItemScreen from "./screens/BestiaryItemScreen"
import ItemScreen from "./screens/ItemScreen"
import ItemEditScreen from "./screens/ItemEditScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"

function App() {
  return (
    <Router>
      <Header />
      <main className='py-4 pl-2'>
        <Row>
          <Col lg={2} md={3} sm={12}>
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
            <Card className='mt-4'>
              <Card.Body>
                <h3 className='text-center'>Ваши волшебные предметы</h3>
                <ItemTabsSide />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={9} sm={12}>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/creatures' component={BestiaryScreen} />
            <Route path='/creature/:id' component={CreatureScreen} exact />
            <Route
              path='/creature/:id/edit/:new?'
              component={CreatureEditScreen}
            />
            <Route path='/spells' component={BestiarySpellScreen} />
            <Route path='/spell/:id' component={SpellScreen} exact />
            <Route path='/spell/:id/edit/:new?' component={SpellEditScreen} />

            <Route path='/items' component={BestiaryItemScreen} />
            <Route path='/item/:id' component={ItemScreen} exact />
            <Route path='/item/:id/edit/:new?' component={ItemEditScreen} />
          </Col>
        </Row>
      </main>
    </Router>
  )
}

export default App
