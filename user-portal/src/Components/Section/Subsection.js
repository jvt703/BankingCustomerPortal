import  {React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import AccountCard from '../Accounts/AccountCard';
function Subsection({CardArray, SubsectionName}) {
 const [displayedCards, setDisplayedCards] = useState(4);
  const handleShowMore = () => {
    setDisplayedCards(displayedCards + 2);
  }


  const accountCards = CardArray.slice(0, displayedCards).map(account => (
    <div className='m-2' key={account.id}>
      <AccountCard  accountName={account.accountName} accountId = {account.id} accountType={account.accountTypeName} accountBalance={account.balance} />
    </div>  ))


  return (
  <div className='mt-3'>
            <h3 className='text-start'>{SubsectionName}</h3>
             <div className='Subsection-container mt-3'>
            {accountCards}
          {/* <AccountCard accountName={"Checking Account ********12334"} accountNumber={2} accountBalance={100}></AccountCard> */}
          
        
        </div>
        {displayedCards < CardArray.length && <button className='mt-3 view-button' onClick={handleShowMore}>Show more</button>}
        </div>
  );
}

export default Subsection;