import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { logout } from "../actions/userActions"

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

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

              <LinkContainer to='/items'>
                <Nav.Link disabled active={false}>
                  <i className='fas fa-book'></i> Магические предметы
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/kodex'>
                <Nav.Link disabled>
                  <i className='fas fa-book'></i> Кодекс
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  {/* <LinkContainer to='/profile'>
                    <NavDropdown.Item disabled>Мой профиль</NavDropdown.Item>
                  </LinkContainer> */}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Выйти
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Войти (Как администратор)
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
