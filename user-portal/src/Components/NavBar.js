
import {  Link} from 'react-router-dom';
import React from "react";

const NavBar = ({pageName, pageDescription})=>{
    return (
        <header> // Very crude example as I'm self-answering, in production I'll rename the component to Header
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Accounts">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
    );

}

export default NavBar;