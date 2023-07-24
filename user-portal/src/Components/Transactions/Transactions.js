
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
    <Section  title="Make Transaction">
   <TransactionForm >
       
        <div className='card border shadow-0 px-2 pt-2 pb-3'>
           <TransactionDropdown name={"sourceAccount"}></TransactionDropdown>
          <NumberInput
            inputId="destinationAccount"
            className="col-sm-6 col-12 centered align-self-center "
            labelText="Sending Amount"
            
            useName
          />
           <NumberInput
            inputId="Amount"
            className="col-sm-6 col-12 centered align-self-center"
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