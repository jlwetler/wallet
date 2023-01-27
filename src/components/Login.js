import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Loading from './Loading';
import Container from './Container';
import logo from '../images/logo.jpg';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        if(localStorage.length !== 0) {
            const userData = localStorage.getItem("user");
            setUser(JSON.parse(userData));
            navigate('/wallet');
        }
    },[])

    function sendLogin() {
        setLoading(true);
        const body = {email, password};
        axios.post('http://localhost:4000/login', body)
        .then((response) => {
            setUser(response.data);
            navigate('/wallet');
        })
        .catch(error => {
            console.log(error.response.status)
            alert('Email ou senha incorretos');
            setLoading(false);
        });

    }

    return (
        <Container>
            <h1>DIGITAL WALLET</h1>
            <img src={logo} alt='logo' />   
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
            <button disabled={!loading ? false : true} onClick={sendLogin}>
                {!loading ? 'Entrar' : <Loading/>}
            </button>
            <Link to='/sign-up' >
                <span>Não tem uma conta? Cadastre-se</span>
            </Link>
        </Container>
    );
}



