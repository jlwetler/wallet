import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Wallet({ setMoneyEntry }) {
    const { user } = useContext(UserContext);

    console.log(`Logado, ${user.name}, ${user.email}, ${user.token}`)


    return (
        <WalletContainer>
            <section>
                Olá, {user.name}
            </section>
            <Transactions>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00</p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00</p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00</p>
                </div>
                <div>
                    <p>29/11 Salário</p>
                    <p>6000,00</p>
                </div>
                <section>
                    <p className='saldo'>SALDO</p>
                    <p className='value'>6000,00</p>
                </section>
            </Transactions>
            <Footer>
                <Link to='/transaction/' onClick={() => setMoneyEntry(true)}>
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
`;

const Transactions = styled.div`
    position: relative;
    padding: 20px;
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
        margin-bottom: 10px;
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
        right: 20px;
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