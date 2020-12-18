import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Bestiary</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/creatures'>
                <Nav.Link>
                  <i className='fas fa-address-card'></i> Существа
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/spells'>
                <Nav.Link>
                  <i className='fas fa-book'></i> Заклинания
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Войти как администратор
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
