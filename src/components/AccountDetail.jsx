import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountDetail = (id) => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("/api/clients/current",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const clientData = response.data;
                setAccounts(clientData.accounts);
                console.log(accounts.findIndex(0));
                
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);


    return (
        <div className="clientcardcontainer">
            <div className="clientcard">
                <p className="acctitle">Account Number:    <span>{account.number}</span></p>
                <p className="acctitle">Balance:</p>
                <span className="accbalance">${account.balance}</span>
                <p className="acctitle">Creation Date: <span>{account.creationDate}</span></p>                 
            </div>
        </div>
    );
};

export default AccountDetail;