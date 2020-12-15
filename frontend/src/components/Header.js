import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Bestiary</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/creatures'>
                <i className='fas fa-address-card'></i> Существа
              </Nav.Link>
              <Nav.Link href='/spells'>
                <i className='fas fa-book'></i> Заклинания
              </Nav.Link>
              <Nav.Link href='/spells'>
                <i className='fas fa-user'></i> Войти как администратор
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
