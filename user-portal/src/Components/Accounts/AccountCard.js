import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AccountCard(props) {
  return (
    <Card className='p-3' style={{ width: '25vw' }}>
        <div className='d-flex flex-row bd-highlight'>
            <div className='Card-title '>{props.accountName}:</div>
             <div className='Account-Balance my-auto ms-auto'>${props.accountBalance}</div>
        </div>
     
      <Link className='text-left mt-2 Account-button' to={`/Accounts/${props.accountNumber}`}><Button  variant="primary">View Account</Button></Link>
    </Card>
  );
}

export default AccountCard;