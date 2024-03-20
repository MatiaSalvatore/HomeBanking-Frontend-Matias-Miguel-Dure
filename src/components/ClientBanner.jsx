import React, { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import authActions from '../redux/actions/authactions'

const WelcomeBanner = () => {
    const user = useSelector((store)=>store.auth.user)
    const dispatch = useDispatch();
    const {current, login}= authActions
    const username = user.name || 'Guest'

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (!user.loggedIn && !!token){
            axios.get("/api/clients/current",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                console.log(res.data);
                dispatch(current(res.data))
                dispatch(login(token))
            })
        }
    },[])
    return (
        <>    
            <p className="welcome">Welcome, {username}!</p>
        </>    
    );
};

export default WelcomeBanner;