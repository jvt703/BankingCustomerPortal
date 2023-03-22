
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
import CreditCardsOverview from './Components/CreditCardSignup/CreditCardsOverview';
import LoanSignup from './Components/LoanSignup/LoanSignup';
import CreditCardSignup from './Components/CreditCardSignup/CreditCardSignup';
import { Login } from './Components/login/Login';

function App() {
  return (
    
      <div className="App">
       
        <BrowserRouter>
         <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/Accounts">
              <Route index element={<Accounts></Accounts>} />
              <Route path=":id" element={<Account></Account>} />
            </Route>
            <Route
              path="transaction/*"
              element={
                <HeaderComponent
                  pageName="Transaction"
                  pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                />
              }
            />
            <Route path='Settings' element={<UserSettings></UserSettings>}>             
            </Route>

            <Route path="CreditCards">
              <Route index element={<CreditCardsOverview />}/>
              <Route path=":id" element={<CreditCardSignup />} />
            </Route>
            <Route path="Loans" element={<LoanSignup />}/>
          </Routes>
        
        </BrowserRouter>
      </div>
  
  );
}

export default App;
