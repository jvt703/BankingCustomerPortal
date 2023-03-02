import React, { useState } from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import AccountCard from "./AccountCard";

const Accounts = ()=>{
    let arr = [{name:"Checking Account ********12334", number: 2, balance: 100}, {name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100},{name:"Checking Account ********12334", number: 2, balance: 100}]
    const [displayedCards, setDisplayedCards] = useState(2);

  const handleShowMore = () => {
    setDisplayedCards(displayedCards + 2);
  }

  const accountCards = arr.slice(0, displayedCards).map(account => (
    <div className='col-sm-4'>
      <AccountCard accountName={account.name} accountNumber={account.number} accountBalance={account.balance} />
    </div>
  ));
    return (
      <>
        <HeaderComponent
          pageName="Accounts"
          pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        />
        <Section title="Accounts">
            {accountCards}
          {/* <AccountCard accountName={"Checking Account ********12334"} accountNumber={2} accountBalance={100}></AccountCard> */}
          {displayedCards < arr.length &&
        <button className='mt-3 view-button' onClick={handleShowMore}>Show more</button>
      }
        </Section>
      </>
    );

}

export default Accounts;