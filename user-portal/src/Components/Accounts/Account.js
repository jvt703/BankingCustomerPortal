import React from "react";
import HeaderComponent from "../Headercomponent";
import { useParams, Link } from "react-router-dom";
import Section from "../Section/Section";
import AccountDisplay from "../Transactions/AccountDisplay";


const Account = ()=>{
    const {id} = useParams()
    const str = `Checking Account ${id}`
    return (
        <>
        <HeaderComponent  pageName={str} pageDescription="View Account and Transaction Details"/>
        <Section  title="Account">
            <AccountDisplay></AccountDisplay>
        </Section>
        </>
    );

}

export default Account;