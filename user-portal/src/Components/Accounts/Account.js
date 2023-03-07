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
        <HeaderComponent pageName={str} pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
        <Link to={"/"}>Here</Link>
        <Section title="Account">
            <AccountDisplay></AccountDisplay>
        </Section>
        </>
    );

}

export default Account;