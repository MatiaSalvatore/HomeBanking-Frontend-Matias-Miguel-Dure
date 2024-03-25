import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import authActions from '../redux/actions/authactions'
import ClientCard from "../components/ClientCard";
import ClientDBCards from "../components/ClientDBCards";
import AccountDetail from "../components/AccountDetail";
import Transaction from "../components/Transaction";
import WelcomeBanner from "../components/ClientBanner";
import ActionButton from "../components/ActionButton";
import Carrousel from "../components/Carrousel";



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
        <div className="mainlayoutgrid">
            <div>
                <WelcomeBanner></WelcomeBanner>
                <h1 className="titles" >Accounts</h1>
                <ClientCard></ClientCard>
                <h1 className="titles">Cards</h1>
                <ClientDBCards></ClientDBCards>
                <h1 className="titles">Actions</h1>
                <div className="actioncontainer">
                    <ActionButton href="/transaction" content="Transfer money" img="src\assets\icons\bx-transfer.svg"></ActionButton>
                    <ActionButton href="/addloan" content="Apply Loan" img="src\assets\icons\bx-edit-alt.svg"></ActionButton>
                    <ActionButton href="/addcard" content="Request credit card" img="src\assets\icons\bx-credit-card-alt.svg"></ActionButton>
                    <ActionButton href="/addacc" content="Request new account" img="src\assets\icons\bxs-user-account.svg"></ActionButton>
                </div>
            </div>
        </div>
    </div>
    
    )
}


export default Home;