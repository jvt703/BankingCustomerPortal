import AccountCard from "./AccountCard";
import { Link,MemoryRouter as Router } from 'react-router-dom';

import { render } from "@testing-library/react";


describe("Account Card", ()=>{
    it("Card Title displays correct Title", ()=>{
        const {getByTestId} = render(
        <Router><AccountCard 
        accountName={"test Name"} 
        accountId={13}
        accountType={"Checking"}
        accountBalance={100000}/></Router>
        )
        const cardName = getByTestId("card-name").textContent;
        expect(cardName).toEqual("test Name");
    })
    it("Card Type displays correct type", ()=>{
        const {getByTestId} = render(
                <Router><AccountCard 
                accountName={"test Name"} 
                accountId={13}
                accountType={"Checking"}
                accountBalance={100000}/></Router>
                )
        const accountType = getByTestId("card-account-type").textContent;
        expect(accountType).toEqual("Checking");

    })
    it("Card displays correct balance", ()=>{
        const {getByTestId} = render(
                <Router><AccountCard 
                accountName={"test Name"} 
                accountId={13}
                accountType={"Checking"}
                accountBalance={100000}/></Router>
                )
        const accountbalance = getByTestId("card-account-balance").textContent;
        expect(accountbalance).toEqual("$100000");

    })
       it("Link points to correct page", ()=>{
        const {getByTestId} = render(
                <Router><AccountCard 
                accountName={"test Name"} 
                accountId={13}
                accountType={"Checking"}
                accountBalance={100000}/></Router>
                )
        const accountLink = getByTestId("card-account-link");
      expect(accountLink.getAttribute("href")).toEqual(`/Accounts/13`);

    })



})