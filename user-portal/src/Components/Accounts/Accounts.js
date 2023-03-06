import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import AccountsDisplay from "./AccountsDisplay";


const Accounts = ()=>{
  
    return (
      <>
        <HeaderComponent
          pageName="Accounts"
          pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        />
        <Section title="Accounts">
          <AccountsDisplay></AccountsDisplay>
        </Section>
      </>
    );

}

export default Accounts;