import React from "react";
import HeaderComponent from "../Headercomponent";
import Section from "../Section/Section";
import QuestionForm from "./QuestionForm";

const PasswordResetDisplay = ()=>{


    return<>
    <HeaderComponent pageName="Account Recovery">

    </HeaderComponent>
    <Section title="Account Recovery">
    <QuestionForm></QuestionForm>
    </Section>
</> 

}

export default PasswordResetDisplay;