
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
import React, { useState, useEffect } from 'react';
import UserSettings from './Components/Users/UserSettings';
import NavBar from './Components/NavBar';
import CreditCardsOverview from './Components/CreditCardSignup/CreditCardsOverview';
import LoanSignup from './Components/LoanSignup/LoanSignup';
import CreditCardSignup from './Components/CreditCardSignup/CreditCardSignup';
import { Login } from './Components/login/Login';
import PrivateRoutes from './Components/login/ProtectedRoute';
import AccountSignupForm from './Components/Accounts/AccountSignup/AccountSignupForm';

function App() {
  const [ isAuthenticated, setIsAuthenticated] =  useState(localStorage.getItem('accessToken') !== null);
   useEffect(() => {
    document.title = 'NineTen Bank';
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}></NavBar>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}></Login>} />
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated}></PrivateRoutes>}>
            <Route path="/Accounts">
              <Route index element={<Accounts></Accounts>} />
              <Route path=":id" element={<Account></Account>} />
              <Route path="new" element={<AccountSignupForm />} />
            </Route>
            <Route
              path="transaction/*"
              element={
                <HeaderComponent
                  pageName="Transaction"
                  pageDescription=""
                />
              }
            />
            <Route
              path="Settings"
              element={<UserSettings></UserSettings>}
            ></Route>

            <Route path="CreditCards">
              <Route index element={<CreditCardsOverview />} />
              <Route path=":id" element={<CreditCardSignup />} />
            </Route>
            <Route path="Loans" element={<LoanSignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
