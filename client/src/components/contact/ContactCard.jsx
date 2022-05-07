import React from 'react';
import { Card } from 'react-bootstrap';

function ContactCard(props) {
  const { name, role, phone, email } = props.person;
  return (
    <Card>
      <Card.Body className="text-center">
        {/* <Image src="/images/example.jpg" roundedCircle fluid className="w-75" /> */}
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">{role}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <Card.Text>{email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
