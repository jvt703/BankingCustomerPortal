import { useState } from 'react';

export default function NumberInput({

    inputId = String(),
    useName = Boolean(),
    className = String(),
    labelText = String(),
    useRegex = Boolean
}) {
  const [value, setValue] = useState('');

   const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const newValue = restrictToTwoDecimals(inputValue);
    setValue(newValue);
  };

const restrictToTwoDecimals = (inputvalue) => {
    const decimals = /^\d*\.?\d{0,2}$/;
    const whole = /^\d*$/;

    if (useRegex) {
        // If useRegex is true, restrict to two decimal places
        if (decimals.test(inputvalue)) {
            return inputvalue;
        } else if (value.includes('.')) {
            let [integerPart, decimalPart] = inputvalue.split('.');
            if (decimalPart.length > 2) {
                decimalPart = decimalPart.slice(0, 2);
                return `${integerPart}.${decimalPart}`;
            }
        }
    } else {
        // If useRegex is false, only accept whole numbers
        if (whole.test(inputvalue)) {
            
            return inputvalue;
        }
    }

    // If none of the above conditions are met, return the previous value
    return value;
};  

  return (
    <div className={"d-flex flex-column align-items-start " + className}>
    <label htmlFor={inputId} className="form-label">{labelText}</label>
    <input
      type="text"
      className="form-control"
      value={value}
      name={useName ? inputId : null}
      id={inputId} 
      onChange={handleInputChange}
    />
    </div>
  );
}