import React from "react"
import { Row, Col, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeScreen = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-center mb-5'>Добро пожаловать в DnD Bestiary!</h2>
      <h3 className='text-center mt-8'>Выберите действие:</h3>
      <Row className='mt-5 px-5'>
        <Col md={5}>
          <Card className='action-card'>
            <Link to='/creatures'>
              <Card.Img
                variant='top'
                src='https://img5.goodfon.ru/wallpaper/nbig/1/d8/fentezi-igra-art-personazh-navyk-mushk-rizvi-super-galaxy-el.jpg'
              />
              <Card.Body>
                <Card.Title>Искать существо</Card.Title>
                <Card.Text>
                  Созвать существ любых размеров со всего мира!
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col
          className='d-flex justify-content-center align-items-center'
          md={2}
        >
          <h2>Или</h2>
        </Col>
        <Col md={5}>
          <Card className='action-card'>
            <Link to='/spells'>
              <Card.Img
                variant='top'
                src='https://cs13.pikabu.ru/post_img/big/2020/09/19/10/160053333517598677.jpg'
              />
              <Card.Body>
                <Card.Title>Подобрать заклинание</Card.Title>
                <Card.Text>
                  Найти самые опасные и прекрасные заклинания в гильдии магов!
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
