
import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeaderComponent from './Components/Headercomponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Accounts from './Components/Accounts/Accounts';
import Account from './Components/Accounts/Account';
import React from 'react';
import UserSettings from './Components/Users/UserSettings';
import NavBar from './Components/NavBar';
import CreditCardSignup from './Components/CreditCardSignup/CreditCardSignup';

function App() {
  return (
    
      <body className="App">
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accounts></Accounts>} />
            <Route path="/Accounts">
              <Route index element={<Accounts></Accounts>} />
              <Route path=":id" element={<Account></Account>} />
            </Route>
            <Route
              path="transactions/*"
              element={
                <HeaderComponent
                  pageName="Transactions"
                  pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                />
              }
            />
            <Route path='Settings' element={<UserSettings></UserSettings>}>             
            </Route>

            <Route path="CreditCards" element={<CreditCardSignup />}/>
          </Routes>
        
        </BrowserRouter>
      </body>
  
  );
}

export default App;
