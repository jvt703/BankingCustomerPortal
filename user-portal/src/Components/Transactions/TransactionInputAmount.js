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
    setValue(newValue !== '' ? newValue : value);
  };

  const restrictToTwoDecimals = (value) => {
    const decimals = /^\d*\.?\d{0,2}$/;
    const whole = /^\d*$/;
    const match = value.match(useRegex?decimals:whole);
    return match ? match[0] : '';
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