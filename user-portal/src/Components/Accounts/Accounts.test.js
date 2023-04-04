import { render } from "@testing-library/react";
import { Link,MemoryRouter as Router } from 'react-router-dom';
import Accounts from "./Accounts";

describe("Account Card", ()=>{
    it("Header displays correct Header title", ()=>{
        const {getByTestId}= render(<Router><Accounts/></Router> )
        const HeaderTitle = getByTestId("header-test").textContent;
        expect(HeaderTitle).toEqual("Accounts");
    })
    it("Section Title is correct", ()=>{
        const {getByTestId}= render(<Router><Accounts/></Router> )
        const section = getByTestId("section-title").textContent;
        expect(section).toEqual("Accounts")

    })
    // it("Card displays correct balance", ()=>{
     
    //     expect(accountbalance).toEqual("$100000");

    // })
    // it("Link points to correct page", ()=>{
     
    //   expect(accountLink.getAttribute("href")).toEqual(`/Accounts/13`);

    // })



})