import { useEffect, useState } from "react";
import HeaderComponent from "../Headercomponent"
import Section from "../Section/Section";
import CreditCardSummary from "./CreditCardSummary"

export default function CreditCardsOverview(){

  

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "creditCardTypes")
    .then(res => res.json())
    .then(setCardData)
  }, [])

  return <>
    <HeaderComponent pageName="Sign up for a Credit Card" />
    <Section>
      <h1 className="ms-1 ms-md-5 my-2 text-center">Available cards</h1>
      
      <div className="d-flex flex-row flex-wrap gap-3 align-items-center justify-content-center mx-1">
        {cardData.map((cardData, index) => <CreditCardSummary key={index} cardData={cardData}/>)}
      </div>
      
    </Section>
  </>
}