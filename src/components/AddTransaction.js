import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function AddTransaction({ moneyEntry, transactions, setTransactions }) {
    const { user } = useContext(UserContext);
    const [ value, setValue] = useState(null);
    const [ description, setDescription] = useState("");
    const [date, setDate] = useState();
    const navigate = useNavigate();

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function sendTransaction() {
        const userId = user.id;
        const body = { value, description, moneyEntry, date, userId };
        console.log(body);
        console.log(config);
        axios.post('http://localhost:4000/transactions', body, config)
        .then(response => {
            setTransactions([...transactions], response.data);
            navigate('/wallet');
        })
        .catch(()=>{
            alert('Erro no servidor')
        })
    
    }


    return(
        <NewEntry>
            <section>
                Nova {moneyEntry ? 'entrada' : 'saída'}
            </section>
            <input 
                type="number" 
                placeholder="Valor" 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Descrição" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                required
            />
            <input 
                type="date" 
                placeholder="Data" 
                value={date} 
                onChange={e => setDate(e.target.value)} 
                required
            />
            <div onClick={sendTransaction}>
                Salvar {moneyEntry ? 'entrada' : 'saída'}
            </div>
            <Link to='/wallet'>
                <div>Cancelar</div>
            </Link>

        </NewEntry>
    )
}

const NewEntry = styled.div`
    padding: 25px;
    margin-top: 10px;
    font-size: 28px;
    section {
        margin-bottom: 25px;
    }
    input {
        margin-top: 10px;
        padding: 10px;
        width: calc(100vw - 50px);
        height: 45px;
        border: 1px solid #000000;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    input::placeholder {
        font-family: 'Righteous';
        font-size: 18px;
    }
    div {
        font-size: 22px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        background: #A328D6;
        width: calc(100vw - 50px);
        height: 45px;
        border-radius: 8px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    div:hover {
        cursor: pointer;
        background: purple;
    }
`;