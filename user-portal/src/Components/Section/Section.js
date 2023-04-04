import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Section(props) {
  return (
    <div className="d-flex  Sections-container justify-content-center">
      <div className="p-3 m-2 w-75 card Section-container">
        {props.title && <h1 className="ms-1 ms-md-5 my-2 text-start">{props.title}</h1>}
        {props.children}
      </div>
    </div>
  );
}

export default Section;
