import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import UserSettingsCard from "./UserSettingsCard";


const UserSettings = ()=>{

    return (
        <>
        <HeaderComponent pageName={"User Settings"} pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
 
        <Section title="User Settings">
            <UserSettingsCard settingText={"First Name"}/>
            <UserSettingsCard settingText={"Last Name"}/>
            <UserSettingsCard settingText={"Street Address"}/>
            <UserSettingsCard settingText={"City"}/>
            <UserSettingsCard settingText={"State"}/>
            <UserSettingsCard settingText={"Zip Code"}/>
    
        </Section>
        </>
    );

}

export default UserSettings;