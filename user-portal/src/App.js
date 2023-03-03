
import './css/App.css';
import HeaderComponent from './Components/Headercomponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Accounts from './Components/Accounts/Accounts';
import Account from './Components/Accounts/Account';
import React from 'react';

function App() {
  return (
    
      <body className="App">
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
          </Routes>
        </BrowserRouter>
      </body>
  
  );
}

export default App;
