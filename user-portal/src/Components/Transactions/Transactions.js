
import { useEffect, useState } from "react";
import HeaderComponent from "../Headercomponent"
import Section from "../Section/Section";
import LabeledInput from "../AbstractSignupForm/LabeledInput";

const Transactions = ()=>{

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "creditCardTypes")
    .then(res => res.json())
    .then(setCardData)
  }, [])

  return <>
    <HeaderComponent pageName="Transactions" />
    <Section>
   
       
  <LabeledInput 
          className="col-sm-6 col-12"
          inputId="Transaction Ammount"
          labelText="Amount requested:"
          title="Input should be a whole number"
          pattern="^\d+(\.\d{1,2})?$"
          useName
        
        />
    <LabeledInput 
          className="col-sm-6 col-12"
          inputId="Transaction Account"
          labelText="Receiving Account"
          title="Input should be a whole number"
          pattern="^\d+$"
             inputType="text"
          useName
        />
    <input 
            type="submit" 
            value="Submit"
            className="btn btn-primary"
        />
      
    </Section>
  </>
}

export default Transactions;