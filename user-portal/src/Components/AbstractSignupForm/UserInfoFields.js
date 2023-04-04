import LabeledInput from "./LabeledInput";
import { useEffect, useState } from "react";
import LabeledDropdown from "./LabeledDropdown";
import RentSection from "./RentSection";
import enumTextValueMap from "./enumTextValueMap";

export default function UserInfoFields(){
  const [userData, setUserData] = useState(null);
  const [birthDateString, setBirthDateString] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "user/1/applicationPrefill")
    .then(res => res.json())
    .then(setUserData);
  }, [])

  useEffect(() => {
    if(userData){
      function displayDateNumber(dateNumber = Number()){
        return new String(dateNumber).padStart(2, "0")
      }
      const birthDate = new Date(userData.birthDate);
      setBirthDateString(`${displayDateNumber(birthDate.getMonth())}/${displayDateNumber(birthDate.getDay())}/${birthDate.getFullYear()}`);
    }
  }, [userData])

  return userData && <>
      <h5>Applicant information</h5>
      <LabeledInput
        className="col-sm-6 col-12"
        inputId="firstname" 
        labelText="First name:" 
        value={userData.firstname} 
        disabled={true}
      />
      <LabeledInput 
        className="col-sm-6 col-12"
        inputId="lastname" 
        labelText="Last name:" 
        value={userData.lastname} 
        disabled={true}
      />
      <LabeledInput 
        className="col-sm-7 col-12"
        inputId="email" 
        labelText="Email address:" 
        value={userData.email} 
        disabled={true}
      />
      <LabeledInput 
        className="col-sm-5 col-12"
        inputId="birthDate" 
        labelText="Date of birth:" 
        value={birthDateString}
        disabled={true}
      />
      <LabeledInput
        className="col-sm-5 col-12"
        inputId="socialSecurityNumber" 
        labelText="Social Security Number (SSN):"
        pattern="\d{9}"
        useName
      />
      <LabeledInput  
        className="col-sm-7 col-12"
        inputId="motherMaidenName" 
        labelText="Mother's maiden name:"
        useName
      />
      <LabeledDropdown
        className="col-sm-6 col-12"
        inputId="employmentStatus"
        labelText="Employment type:"
        options={enumTextValueMap([
          "Employed",
          "Self employed",
          "Unemployed",
          "Other"
        ])}
        useName
      />
      <LabeledInput  
        className="col-sm-6 col-12"
        inputId="grossAnnualIncome" 
        labelText="Gross annual income:"
        title="Input should be a whole number"
        pattern="\d*"
        useName
      />
      <RentSection />

      <hr></hr>

      <h5>Home address</h5>
      <LabeledInput
        className="col-sm-6 col-12"
        inputId="streetAddress" 
        labelText="Street address:" 
        value={userData.address.street} 
        disabled={true}
      />
      <LabeledInput
        className="col-sm-6 col-12"
        inputId="city" 
        labelText="City:" 
        value={userData.address.city} 
        disabled={true}
      />
      <LabeledInput 
        className="col-sm-6 col-12"
        inputId="state" 
        labelText="State:" 
        value={userData.address.state} 
        disabled={true}
      />
      <LabeledInput 
        className="col-sm-6 col-12"
        inputId="zipCode" 
        labelText="ZIP code:" 
        value={userData.address.zipCode} 
        disabled={true}
      />

    <hr></hr>
      
    </>
}