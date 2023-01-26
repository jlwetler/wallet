import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Loading from './Loading';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [removeLoading, setRemoveLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function sendLogin() {
        setRemoveLoading(true);
        const body = {email, password};
        const request = axios.post('http://localhost:4000', body);
        request.then((response) => {
            setUser(response.data);
            navigate('/today');
        });
        request.catch(() => {
            alert('Email ou senha incorretos');
            setRemoveLoading(false);
        });

    }



    return (
        <LoginContainer>
            <input 
                type="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
            />
            <Button disabled={!removeLoading ? false : true} onClick={sendLogin}>
                {!removeLoading ? 'Entrar' : <Loading/>}
            </Button>
            <Link to='/sign-up' >
                <span>Não tem uma conta? Cadastre-se</span>
            </Link>
        </LoginContainer>
    );
}

const LoginContainer = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
        span {
            color: #ffffff;
        }
        input {
            padding: 10px;
            width: 303px;
            height: 45px;
            border: 1px solid #000000;
            border-radius: 5px;
            margin-bottom: 10px;
        }
`;

const Button = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A328D6;
    border-radius: 5px;
    color:white;
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    cursor: pointer;
    disabled {
        opacity: 0.1;
    }
`;