import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AccountCard(props) {
  return (
    <Card className='p-3 Account-card' >
        <span className='Card-title '>{props.accountName}</span>
        <div className='d-flex flex-row bd-highlight'>
            
            <div>{props.accountId}</div>
             <div className='Account-Balance my-auto ms-auto'>${props.accountBalance}</div>
        </div>
      <Link className='text-left ms-3 mt-2 Account-button' to={`/Accounts/${props.accountNumber}`}><button className='view-button' variant="primary">View Account</button></Link>
    </Card>
  );
}

export default AccountCard;