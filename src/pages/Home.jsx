import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import authActions from '../redux/actions/authactions'


const Home = ()=>{
    const user = useSelector((store)=>store.auth.user)
    //const dispatch = useDispatch();
    //console.log(user);
    //const {current, login}= authActions


    /*useEffect(()=>{
        const token = localStorage.getItem('token');

        if (!user.loggedIn && !!token){
            axios.get("/api/clients/current",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{ 
                console.log(res.data);
                dispatch(current(res.data))
            })
        }
    },[]) */
    const username = user.name || 'Guest'
    return (
    <div>
        Welcome to Dashboard, {username}!
    </div>)
}


export default Home;