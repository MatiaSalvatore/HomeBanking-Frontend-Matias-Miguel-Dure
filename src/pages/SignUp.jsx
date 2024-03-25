import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'



const SignUp = ()=>{

    const [userData,setUserData] = useState({firstname:'',lastname:'',email:'',password:''})
    const dispatch = useDispatch()
    const {login} = authActions;
    const navigate = useNavigate()

    const handleSignUp = async(e)=>{
        e.preventDefault()
        axios.post("/api/auth/register",userData)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
            alert('User with specified email address already exists');
        })
    }

    const handleInput = (e) =>{
        setUserData({...userData, [e.target.name]:e.target.value})
        console.log(userData)
    }

    return (
        <div className="formcontainer">
            <form onSubmit={handleSignUp}>
                <label htmlFor="firstname">First Name:</label>
                <input onChange={handleInput} type="text" name="firstname" id="firstname" />
                <label htmlFor="lastname">Last Name:</label>
                <input onChange={handleInput} type="text" name="lastname" id="lastname" />
                <label htmlFor="email">Email:</label>
                <input onChange={handleInput} type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input onChange={handleInput} type="password" name="password" id="password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;