import React from 'react';
import { Card, Image } from 'react-bootstrap';

function PersonCard(props) {
  const { name, role, text } = props.person;
  return (
    <Card>
      <Card.Body className="text-center">
        <Image src="/images/example.jpg" roundedCircle fluid className="w-75" />
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">{role}</Card.Text>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
