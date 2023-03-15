import { useEffect, useState } from "react";
import HeaderComponent from "../Headercomponent"
import CreditCardSummary from "./CreditCardSummary"

export default function CreditCardsOverview(){

  

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "creditCardTypes")
    .then(res => res.json())
    .then(setCardData)
  }, [])

  return <>
    <HeaderComponent pageName={"Sign up for a Credit Card"}/>
 
    <h2 className="mt-4">Available cards</h2>
    
    <div className="d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center p-4">
      {cardData.map((cardData, index) => <CreditCardSummary key={index} cardData={cardData}/>)}
    </div>
    
  </>
}