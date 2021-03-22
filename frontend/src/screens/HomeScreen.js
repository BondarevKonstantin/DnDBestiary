import React from "react"
import { Row, Col, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeScreen = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-center mb-5'>
        Добро пожаловать в DnD Bestiary by Konstantin Bondarev!
      </h2>
      <h3 className='text-center mt-8'>Выберите действие:</h3>

      <Row className='mt-5 px-5'>
        <Col md={4}>
          <Card className='action-card'>
            <Link to='/creatures'>
              <Card.Img
                className='action-card-img'
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

        <Col md={4}>
          <Card className='action-card'>
            <Link to='/spells'>
              <Card.Img
                className='action-card-img'
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

        <Col md={4}>
          <Card className='action-card'>
            <Link to='/items'>
              <Card.Img
                className='action-card-img'
                variant='top'
                src='https://i.pinimg.com/originals/4d/06/99/4d069955d0335b2ef436cd58aa2c64d3.jpg'
              />
              <Card.Body>
                <Card.Title>Найти волшебный предмет</Card.Title>
                <Card.Text>
                  Отыскать невиданные миру легендарные магические предметы!
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>

      <Row className='mt-5 px-5'>
        <Col md={4}>
          <Card className='action-card-disabled'>
            {/* <Link to='/codex'> */}
            <Card.Img
              className='action-card-img-disabled'
              variant='top'
              src='https://p4.wallpaperbetter.com/wallpaper/541/644/1/library-fantasy-art-hd-wallpaper-preview.jpg'
            />
            <Card.Body>
              <Card.Title>???</Card.Title>
              <Card.Text>
                {/* Окунуться в историю всего сущего на Истмусе! */}
                Вы еще не открыли этот раздел
              </Card.Text>
            </Card.Body>
            {/* </Link> */}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
