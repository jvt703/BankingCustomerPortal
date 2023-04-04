import LabeledInput from "./LabeledInput"
import LabeledDropdown from "./LabeledDropdown"
import { useState } from "react"
import enumTextValueMap from "./enumTextValueMap"

export default function RentSection(){
  const [selection, setSelection] = useState("")
  
  return <>
    <LabeledDropdown
      className={"col-sm-6 col-12"}
      inputId="residenceOwnershipStatus"
      labelText="Residence ownership:"
      onChange={setSelection}
      options={enumTextValueMap([
        "Own",
        "Rent",
        "Other"
      ])}
      useName
    />
    {selection && selection !== "OWN" && <LabeledInput
      className="col-sm-6 col-12"
      inputId="housingPayment"
      labelText="Housing payment:"
      pattern="\d*"
      title="Input should be a whole number"
      useName
    />
    }
  </>
}