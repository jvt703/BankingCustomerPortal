import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import UserSettingsCard from "./UserSettingsCard";


const UserSettings = ()=>{

    return (
        <>
        <HeaderComponent pageName={"Settings"} pageDescription=""/>
 
        <Section title="User Settings">
            <hr></hr>
            <div class="col-lg-8">
                <div class="row">
                    <div class="form-group col-md-9">
                        <label for="user_name">First Name</label>
                        <input class="form-control" required="required" type="text"/>
                        <label for="last_name">Last Name</label>
                        <input class="form-control" required="required" type="text"/>
                        <small class="form-text">
                        Enter your name as displayed on your government issued ID.
                        </small>
                    </div>
                </div>
                
                <div class="row">
                    <div class="form-group col-md-9">
                        <label for="street">Street Address</label>
                        <input class="form-control" required="required" type="text"/>
                        <label for="city">City</label>
                        <input class="form-control" required="required" type="text"/>
                        <label for="state">State</label>
                        <input class="form-control" required="required" type="text"/>
                        <label for="zip">Zip Code</label>
                        <input class="form-control" required="required" type="text"/>
                        <small class="form-text">
                        Enter your current location.
                        </small>
                    </div>
                </div>
            </div>
            <hr/>
            <button class="btn btn-md btn-confirm" type="submit">
                <span>
                    Update profile settings
                </span>
            </button>
            {/* <UserSettingsCard settingText={"First Name"} settingValue={"John"}/>
            <UserSettingsCard settingText={"Last Name"} settingValue={"Smith"}/>
            <UserSettingsCard settingText={"Street Address"} settingValue={"123 Street"}/>
            <UserSettingsCard settingText={"City"} settingValue={"Cityvile"}/>
            <UserSettingsCard settingText={"State"} settingValue={"Stateisland"}/>
            <UserSettingsCard settingText={"Zip Code"} settingValue={"00001"}/> */}
        </Section>
        </>
    );

}

export default UserSettings;