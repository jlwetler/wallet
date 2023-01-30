import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { IoIosLogOut, IoMdTrash } from "react-icons/io";
import UserContext from '../contexts/UserContext';
import TransactionsContext from '../contexts/TransactionsContext';
import TransactionsContainer from './TransactionsContainer';
import axios from 'axios';
import dayJS from "dayjs";
import styled from "styled-components";

export default function Wallet({ setMoneyEntry }) {
    
    const { user, setUser } = useContext(UserContext);
    const { transactions, setTransactions } = useContext(TransactionsContext);
    const [ balance, setBalance ] = useState(0);
    const navigate = useNavigate();

    if(localStorage.length === 0) {
        localStorage.setItem('user', JSON.stringify(user));
        const userData = localStorage.getItem("user");
        setUser(JSON.parse(userData));
    } 

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(getTransactions,[])

    useEffect(() => {
        setBalance(calculateBalance(transactions));
    },[transactions])

    function getTransactions() {
        axios.get('http://localhost:4000/transactions', config)
        .then( (response) => {
            setTransactions(response.data);
           
        })
        .catch(error => {
            if (error.response.status === 401) {
                alert('Sessão encerrada, faça o login novamente');
                navigate('/');
            }
        })
    }

    function calculateBalance(transactions) {
        return transactions.reduce((total, { value, moneyEntry }) => 
            moneyEntry ? total += value : total -= value
        ,0)
    }

    function logout() {
        localStorage.removeItem('user');
        navigate('/');
    }

    function deleteTransaction(id) {
        if(window.confirm("Tem certeza que deseja deletar a transação?")) {
            
            axios.delete(`http://localhost:4000/transactions/${id}`, config)

            getTransactions();
        }
    }

    return (
        <WalletContainer>
            <section>
                <h1>Olá, {user.name}</h1>
                <IoIosLogOut size={32} onClick={logout}/>
            </section>
            <TransactionsContainer>
                <section>
                {transactions.length === 0 ? <>Nenhuma transação para exibir ainda</> : 
                    transactions.map(t => 
                        <div key={t.id}>
                            <aside>
                                <h2 className='date'>{dayJS(t.date).format("DD/MM/YY")} </h2> {t.description}
                            </aside>
                            <aside>
                                <p className={t.moneyEntry ? 'green' : 'red'}>{t.value}</p>
                                <IoMdTrash onClick={ () => deleteTransaction(t.id) } className='icon'/>
                            </aside>
                        </div>
                    )
                }
                </section>
                <div>
                    <p className='saldo'>SALDO</p>
                    <p className={balance >= 0 ? ' value green' : ' value red'}>
                        {Math.abs(balance)}
                    </p>
                </div>
            </TransactionsContainer>
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