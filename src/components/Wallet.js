import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { IoIosLogOut, IoMdTrash } from "react-icons/io";

export default function Wallet({ setMoneyEntry, transactions }) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    if(localStorage.length === 0) {
        localStorage.setItem('user', JSON.stringify(user));
        const userData = localStorage.getItem("user");
        setUser(JSON.parse(userData));
    } 

    function logout() {
        localStorage.removeItem('user');
        navigate('/');
    }

    function deleteTransaction() {

    }

    return (
        <WalletContainer>
            <section>
                <div>Olá, {user.name}</div>
                <IoIosLogOut size={32} onClick={logout}/>
            </section>
            <Transactions>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00<IoMdTrash onClick={deleteTransaction} className='icon'/></p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00<IoMdTrash className='icon'/></p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00<IoMdTrash className='icon'/></p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00<IoMdTrash className='icon'/></p>
                </div>
                <section>
                    <p className='saldo'>SALDO</p>
                    <p className='value'>6000,00</p>
                </section>
            </Transactions>
            <Footer>
                <Link to='/transaction' onClick={() => setMoneyEntry(true)}>
                    <section>
                        <div>+</div>
                        <span>Nova entrada</span>
                    </section>
                </Link>
                <Link to='/transaction' onClick={() => setMoneyEntry(false)}>
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

const Transactions = styled.div`
    position: relative;
    padding: 20px 0px 20px 20px;
    background: #fff;
    color: #000;
    font-size:20px;
    margin-top: 30px;
    height: 60vh;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;
        p{
            display: flex;
            flex-wrap: wrap;
        }
    }
    section {
        display: flex;
        justify-content: space-between;
    }
    .saldo {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
    .value {
        position: absolute;
        bottom: 20px;
        right: 28px;
    }
    .icon {
        margin: 0 2px 0 6px;
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
        width: 165px;
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
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid #fff
    }
    span {
        font-size: 18px;
    }
`;