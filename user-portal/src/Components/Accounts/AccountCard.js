import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AccountCard(props) {
  return (
    <Card  style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title className='Card-title '>{props.accountName}</Card.Title>
        <Card.Text className='Card-content'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
      <Link className='text-left m-2 Account-button' to={`/Accounts/${props.accountNumber}`}><Button  variant="primary">Check Account</Button></Link>
    </Card>
  );
}

export default AccountCard;