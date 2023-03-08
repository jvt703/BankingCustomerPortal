import { useEffect, useState } from "react";
import HeaderComponent from "../Headercomponent"
import CreditCardSummary from "./CreditCardSummary"

export default function CreditCardSignup(){

  

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "creditCardTypes")
    .then(res => res.json())
    .then(setCardData)
  }, [])

  return <div>
    <HeaderComponent pageName={"Sign up for a Credit Card"}/>
 
    <h2 className="my-4">Available cards</h2>
    <div className="d-flex flex-column align-items-center justify-content-center">
      {cardData.map((cardData, index) => <CreditCardSummary key={index} cardData={cardData}/>)}
    </div>
    
  </div>
}