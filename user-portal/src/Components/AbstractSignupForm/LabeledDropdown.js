export default function LabeledDropdown({
  labelText = String(),
  inputId = String(),
  options = [{text: "", value: ""}],
  className = String(),
  onChange = (value) => {},
  useName = Boolean()
}){
  return <div className={"d-flex flex-column align-items-start " + className}>
    <label htmlFor={inputId} className="form-label">{labelText}</label>
    <select 
      className="form-select" 
      id={inputId} 
      required 
      onChange={e => onChange(e.target.value)}
      name={useName ? inputId : null}
      defaultValue=""
    >
      <option disabled value="" readOnly>Choose...</option>
      {
        options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)
      }
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
}