import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Wallet() {
    const { user } = useContext(UserContext);


    console.log(`Logado, ${user.name}, ${user.email}, ${user.token}`)
}