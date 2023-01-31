import styled from "styled-components";
import { IoMdTrash } from "react-icons/io";
import {  useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import TransactionsContext from '../contexts/TransactionsContext';
import axios from 'axios';
import dayJS from "dayjs";

export default function TransactionsContainer() {
    const { user } = useContext(UserContext);
    const { transactions, setTransactions } = useContext(TransactionsContext);
    const [ balance, setBalance ] = useState(0);
    const navigate = useNavigate();

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

    function deleteTransaction(id) {
        if(window.confirm("Tem certeza que deseja deletar a transação?")) {
            
            axios.delete(`http://localhost:4000/transactions/${id}`, config)

            getTransactions();
        }
    }

    return (
        <Container>
            <ul>
                {transactions.length === 0 ? <>Nenhuma transação para exibir ainda</> : 
                    transactions.map(t => 
                        <li key={t.id}>
                            <span>
                                <h2 className='date'>{dayJS(t.date).format("DD/MM/YY")} </h2> {t.description}
                            </span>
                            <span>
                                <p className={t.moneyEntry ? 'green' : 'red'}>{t.value}</p>
                                <IoMdTrash onClick={ () => deleteTransaction(t.id) } className='icon'/>
                            </span>
                        </li>
                    )
                }
            </ul>
            <div>
                <span className='saldo'>SALDO</span>
                <span className={balance >= 0 ? ' value green' : ' value red'}>
                    {Math.abs(balance)}
                </span>
            </div>
        </Container>
    )
} 

const Container = styled.div `
    position: relative;
    padding: 15px 0 15px 15px;
    background: #fff;
    color: #000;
    font-size: 16px;
    margin-top: 30px;
    height: 60vh;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    ul {
        display: block;
        overflow-y: scroll;
        max-height: 53vh; 
        width: 100%;
    }
    li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        span {
            display: flex;
            margin-right: 3px;
        }
    }
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .date {
        color: gray;
        margin-right: 8px;
    }
    .saldo {
        position: absolute;
        bottom: 15px;
        left: 15px;
    }
    .value {
        position: absolute;
        bottom: 15px;
        right: 25px;
    }
    .icon {
        margin-left: 8px;
    }
    .green {
        color: #0BDA51;
    }
    .red {
        color: red;
    }
`;