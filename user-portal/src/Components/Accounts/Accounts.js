import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import AccountsDisplay from "./AccountsDisplay";


const Accounts = ()=>{
  
    return (
      <>
        <HeaderComponent
          pageName="Accounts"
          pageDescription="View all accounts"
        />
        <Section title="Accounts">
          <AccountsDisplay></AccountsDisplay>
        </Section>
      </>
    );

}

export default Accounts;