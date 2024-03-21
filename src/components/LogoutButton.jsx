import React from 'react';
import { useDispatch } from 'react-redux';
import authActions from '../redux/actions/authactions'
import Anchor from './Anchor';

const LogoutButton = ()=>{
    const { logout } = authActions;
    const dispatch = useDispatch();
    
    const handleLogout = () =>{
        dispatch(logout());
        localStorage.removeItem('token')
    };
    return (
        <button class="anchor" onClick={handleLogout}>Log out</button>
    );

}

export default LogoutButton;