import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';
import logo from '../images/logo.jpg';
import Container from './Container';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function sendData() {
        setLoading(false);
        const body = {name, email, password};

        axios.post('http://localhost:4000/sign-up', body)
        .then(() => {
            setLoading(true);
            navigate('/');
        })
        .catch(error => {
            if (error.response.status === 409) {
                alert('Email já cadastrado, insira um e-mail diferente');
            } else {
                alert('Erro no cadastro, tente novamente');
            }
            
            setLoading(true);
        })
    }

    return (
        <Container>
            <h1>DIGITAL WALLET</h1>
            <img src={logo} alt='logo' />
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required
            />
            <input 
                type="email" 
                placeholder="Email" 
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
                        <input 
                type="password" 
                placeholder="Confirme a senha" 
                value={confirmPassword} 
                onChange={e => setPassword(e.target.value)} 
                required
            />
            <button 
                onClick={sendData}>{loading ? 'Cadastrar' : <Loading/>}
            </button>
            <Link to='/' >
                <span>Já tem uma conta? Faça login</span>
            </Link>
        </Container>
    );
}
