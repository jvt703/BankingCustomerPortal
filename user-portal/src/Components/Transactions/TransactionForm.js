import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = (props)=>{
const Navigate = useNavigate();
    async function submitRequest(e) {
    e.preventDefault();
    const data = Object.fromEntries(
      Array.from(e.target.elements)
        .filter((element) => element.name)
        .map((element) => {
          return [element.name, parseFloat(element.value)];
        })
    );
    data["points"] = 1;
    data["date"] = Math.floor(Date.now() / 1000);
    data["reversal"] = false;


    try {
      const response = await fetch('http://localhost:8083/transaction', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }
      else{
        console.log("transaction complete")
        Navigate("/") 
      }
    } catch (error) {
      console.error("Error:", error);
      Navigate("/Transaction") 
    }
  }

    return <form 
    className="my-4 container"
    onSubmit={submitRequest}
  >
    <div className="row g-3 align-items-end">
      {props.children}
      <input 
        type="submit" 
        value="Submit"
        className="btn btn-primary"
      />
    </div>
  </form>



}

export default TransactionForm;