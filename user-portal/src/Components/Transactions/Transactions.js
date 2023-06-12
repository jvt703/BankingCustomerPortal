
import React from "react";
import HeaderComponent from "../Headercomponent"
import Section from "../Section/Section";
import TransactionForm from "./TransactionForm";
import NumberInput from "./TransactionInputAmount";
import TransactionDropdown from "./TransactionDropdown";

const Transactions = (props)=>{

  // const [cardData, setCardData] = useState([]);
  // useEffect(() => {
  //   fetch(process.env.REACT_APP_BACKEND_URL + "creditCardTypes")
  //   .then(res => res.json())
  //   .then(setCardData)
  // }, [])
  //function to send a post request to the transaction api

  return <>
    <HeaderComponent pageName="Transactions" />
    <Section>
   <TransactionForm>

        <TransactionDropdown name={"Sending Account"}></TransactionDropdown>
        <div>
          <NumberInput
            inputId="Transaction Amount"
            className="col-sm-6 col-12"
            labelText="Sending Amount"
            
            useName
          />
           <NumberInput
            inputId="Transaction Amount2"
            className="col-sm-6 col-12"
            labelText="Receiving Account"
            useRegex = {false}
            useName
          />
        
       
           
        </div>
         



   </TransactionForm>
       

    </Section>
  </>
}

export default Transactions;