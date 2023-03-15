import {useState} from 'react'

export default function LabeledInput({
  labelText = String(),
  inputId = String(),
  value = String(),
  disabled = Boolean(),
  className = String(),
  pattern = String(),
  title = String(),
  useName = Boolean()
}){
  const [val, setVal] = useState(value);

  return <div className={"d-flex flex-column align-items-start " + className}>
    <label htmlFor={inputId} className="form-label">{labelText}</label>
    <input 
      type="text" 
      className="form-control"
      name={useName ? inputId : null}
      id={inputId} 
      value={value ? value : val} 
      onChange={e => setVal(e.target.value)} 
      disabled={disabled || false} 
      pattern={pattern || null}
      title={title || null}
      required />
  </div>
}