import React from 'react';
import { Card, Image } from 'react-bootstrap';

function PersonCard(props) {
  const { name, role, imageUrl } = props.person;

  const names = name.split(' ');
  const displayName = names[0] + ' ' + names[names.length - 1][0];

  return (
    <Card>
      <Card.Body className="text-center">
        <Image src={imageUrl} roundedCircle fluid className="w-75 mb-3" />
        <Card.Title>{displayName}</Card.Title>
        <Card.Text className="text-muted">{role}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
