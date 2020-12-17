import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Row, Col, Card } from "react-bootstrap"
import Header from "./components/Header"
import TabsSide from "./components/TabsSide"
import BestiaryScreen from "./screens/BestiaryScreen"
import CreatureScreen from "./screens/CreatureScreen"

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
          </Col>
          <Col md={8}>
            <Route path='/creatures' component={BestiaryScreen} exact />
            <Route path='/creature/:id' component={CreatureScreen} />
          </Col>
        </Row>
      </main>
    </Router>
  )
}

export default App
