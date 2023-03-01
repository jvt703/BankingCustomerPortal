import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AccountCard(props) {
  return (
    <Card className='AccountCard my-2 mx-3'>
      <Card.Body>
        <Card.Title>{props.accountName}</Card.Title>
        <Button variant="primary" href="#">View Account</Button>
      </Card.Body>
    </Card>
  );
}

export default AccountCard;