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
import AddTransaction from './components/AddTransaction'

export default function App() {
  const [user, setUser] = useState({});
  const [moneyEntry, setMoneyEntry] =useState(true)
  return (
    <>
      <Router>
        <GlobalStyle/>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='wallet' element={<Wallet setMoneyEntry={setMoneyEntry}/>} />
            <Route path='transaction' element={<AddTransaction moneyEntry={moneyEntry}/>} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
    
  );
}
