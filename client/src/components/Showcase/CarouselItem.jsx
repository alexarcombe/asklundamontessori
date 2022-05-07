import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function CarouselItem({ children, ...rest }) {
  return (
    <Carousel.Item {...rest}>
      <div className="dark-overlay">
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col className="text-center">{children}</Col>
          </Row>
        </Container>
      </div>
    </Carousel.Item>
  );
}

export default CarouselItem;
