import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { IoIosLogOut } from "react-icons/io";
import TransactionsContainer from './TransactionsContainer';
import styled from "styled-components";
import UserContext from '../contexts/UserContext';

export default function Wallet({ setMoneyEntry }) {
    
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    if(localStorage.length === 0) {
        localStorage.setItem('user', JSON.stringify(user));
        const userData = localStorage.getItem("user");
        setUser(JSON.parse(userData));
    } 

    function logout() {
        localStorage.removeItem('user');
        setUser({})
        navigate('/');
    }

    return (
        <WalletContainer>
            <section>
                <h1>Olá, {user.name}</h1>
                <IoIosLogOut size={32} onClick={logout}/>
            </section>
            
            <TransactionsContainer />

            <Footer>
                <Link to='/add-transaction' onClick={() => setMoneyEntry(true)}>
                    <section>
                        <div>+</div>
                        <span>Nova entrada</span>
                    </section>
                </Link>
                <Link to='/add-transaction' onClick={() => setMoneyEntry(false)}>
                    <section>
                        <div>-</div>
                        <span>Nova saída</span>
                    </section>
                </Link>
            </Footer>
        </WalletContainer>
    )
}


const WalletContainer = styled.div`
    padding: 25px;
    font-size: 28px;
    section {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .logout {
        font-weight: bold;
    }
`;

const Footer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    section {
        display: flex;
        align-items: center;
        padding: 7px;
        background: #A328D6;
        width: 155px;
        height: 60px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    section:hover {
        cursor: pointer;
        background: purple;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        border: 2px solid #fff
    }
    span {
        font-size: 16px;
    }
`;