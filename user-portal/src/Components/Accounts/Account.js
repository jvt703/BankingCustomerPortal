import React from "react";
import HeaderComponent from "../Headercomponent";
import { useParams } from "react-router-dom";
import AccountSection from "../Section/AccountSection";


const Account = ()=>{
    const {id} = useParams()
    const str = `Checking Account ${id}`
    return (
        <>
        <HeaderComponent pageName={str} pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
        <AccountSection></AccountSection>
        </>
    );

}

export default Account;