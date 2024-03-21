import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'



const Transaction = ()=>{

    const [userData,setUserData] = useState({ogAccount:'',destAccount:'',detail:'',amount:''})
    const dispatch = useDispatch()
    const {login} = authActions;
    const navigate = useNavigate()

    const handleTransaction = async(e)=>{
        const token = localStorage.getItem('token');
        e.preventDefault()
        axios.post("/api/transactions",userData,{
            headers:{
                
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data)
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
            <form onSubmit={handleTransaction}>
                <label htmlFor="ogAccount">Account of origin:</label>
                <input onChange={handleInput} type="text" name="ogAccount" id="ogAccount" />
                <label htmlFor="destAccount">Account of destiny:</label>
                <input onChange={handleInput} type="text" name="destAccount" id="destAccount" />
                <label htmlFor="detail">Transaction detail:</label>
                <input onChange={handleInput} type="text" name="detail" id="detail" />
                <label htmlFor="amount">Amount:</label>
                <input onChange={handleInput} type="number" name="amount" id="amount" />
                <button type="submit">Transfer</button>
            </form>
        </div>
    )
}

export default Transaction;