import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AccountCard(props) {
  return (
    <div className='p-3 Account-card card' >
        <span data-testid="card-name" className='Card-title '>{props.accountName}</span>
        <div className='d-flex flex-row flex-wrap bd-highlight'>
          <div className='Account-name ms-3'>
            <div data-testid="card-account-type" >{props.accountType}</div>
            <div>****{ props.accountId.toString().slice(-4)}</div>
          </div>
             <div data-testid="card-account-balance" className='Account-Balance my-auto ms-auto'>${props.accountBalance}</div>
        </div>
      <Link data-testid="card-account-link" className='text-left ms-3 mt-2 Account-button' to={`/Accounts/${props.accountId}`}><button className='view-button' variant="primary">View Account</button></Link>
      
    </div>
  );
  
}


AccountCard.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountBalance: PropTypes.number.isRequired,
  accountId: PropTypes.number.isRequired,
  accountType: PropTypes.string.isRequired
};

export default AccountCard;