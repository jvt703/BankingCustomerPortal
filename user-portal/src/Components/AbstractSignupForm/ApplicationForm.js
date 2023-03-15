import UserInfoFields from "../AbstractSignupForm/UserInfoFields"

export default function ApplicationForm({children, 
  route = String(), 
  handleResponse = (response) => {}
}){

  function submitRequest(e){
    e.preventDefault();
    const data = Object.fromEntries(
      Array.from(e.target.elements)
      .filter(element => element.name)
      .map(element => {
        return [element.name, element.value]
      })
    )
    
    fetch(process.env.REACT_APP_BACKEND_URL + route, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(handleResponse)
  }

  return <form 
    className="my-4 container"
    onSubmit={submitRequest}
  >
    <div className="row g-3 align-items-end w-100">
      <UserInfoFields />
      {children}
      <input 
        type="submit" 
        value="Submit"
        className="btn btn-primary"
      />
    </div>
  </form>
}