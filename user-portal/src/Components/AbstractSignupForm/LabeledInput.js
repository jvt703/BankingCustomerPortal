import {useState} from 'react'


export default function LabeledInput({
  labelText = String(),
  inputId = String(),
  value,
  disabled = Boolean(),
  className = String(),
  pattern = String(),
  title = String(),
  useName = Boolean(),
  inputType = String()
}) {
  const [val, setVal] = useState(value);

  const handleInputChange = (e) => {
    const newValue = handleDecimalsOnValue(parseFloat(e.target.value));
    console.log(newValue,"here")
    setVal(isNaN(newValue) ? '' : newValue);
  };
function handleDecimalsOnValue(value) {
  if (pattern && pattern.includes('.')) {
    // Pattern allows decimals
    const regex = new RegExp(pattern);
    const match = value.toString().match(regex);
    if (match) {
      return parseFloat(match[0]); // Parse the matched value as a float
    } else if (value === '') {
      return value;
    } else {
      return val;
    }
  } else {
    // Pattern does not allow decimals
    const regex = new RegExp(`^${pattern}$|^[0-9]*$`); // Updated regular expression
    const match = value.toString().match(regex);
     const newValue = match ? parseFloat(match[0]) : val;
    return isNaN(newValue) ? '' : newValue;
  }
}
  return (
    <div className={'d-flex flex-column align-items-start ' + className}>
      <label htmlFor={inputId} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType? inputType:"number"}
        className="form-control"
        name={useName ? inputId : null}
        id={inputId}
        value={value ? value : val}
        onChange={handleInputChange}
        disabled={disabled || false}
        pattern={pattern ? pattern : null} // Apply pattern attribute conditionally
        title={title || null}
      />
    </div>
  );
}