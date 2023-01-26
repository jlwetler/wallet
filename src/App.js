import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import GlobalStyle from './globalStyles';
import UserContext from './contexts/UserContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Wallet from './components/Wallet'

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Router>
        <GlobalStyle/>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='wallet' element={<Wallet />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
    
  );
}
