import React from 'react';
import { useDispatch } from 'react-redux';
import authActions from '../redux/actions/authactions'

const LogoutButton = ()=>{
    const { logout } = authActions;
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
        localStorage.removeItem('token')
    };
    return (
        <a class="anchor" href="" onClick={handleLogout}>Log out</a>
    );
}

export default LogoutButton;