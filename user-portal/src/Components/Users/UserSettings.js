import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import UserSettingsCard from "./UserSettingsCard";


const UserSettings = ()=>{

    return (
        <>
        <HeaderComponent pageName={"User Settings"} pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
 
        <Section title="User Settings">
            <UserSettingsCard settingText={"First Name"} settingValue={"John"}/>
            <UserSettingsCard settingText={"Last Name"} settingValue={"Smith"}/>
            <UserSettingsCard settingText={"Street Address"} settingValue={"123 Street"}/>
            <UserSettingsCard settingText={"City"} settingValue={"Cityvile"}/>
            <UserSettingsCard settingText={"State"} settingValue={"Stateisland"}/>
            <UserSettingsCard settingText={"Zip Code"} settingValue={"00001"}/>

        </Section>
        </>
    );

}

export default UserSettings;