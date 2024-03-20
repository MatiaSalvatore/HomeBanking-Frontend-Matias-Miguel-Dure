import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'



const SignIn = ()=>{

    const [userData,setUserData] = useState({email:'',password:''})
    const dispatch = useDispatch()
    const {login} = authActions;
    const navigate = useNavigate()

    const handleSignIn = async(e)=>{
        e.preventDefault()

        axios.post("/api/auth/login",userData)
        .then((res)=>{
            dispatch(login(res.data))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const handleInput = (e) =>{
        setUserData({...userData, [e.target.name]:e.target.value})
        console.log(userData)
    }

    return (
        <div className="componentcontainer">
            <form onSubmit={handleSignIn}>
                <label htmlFor="email">Email:</label><input onChange={handleInput} type="email" name="email" id=""></input>
                
                <label htmlFor="password">Password:</label><input onChange={handleInput} type="password" name="password" id="password"></input>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default SignIn;