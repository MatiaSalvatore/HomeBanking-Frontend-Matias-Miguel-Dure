import React, { useEffect, useState } from "react";
import axios from "axios";
import { CustomScroll } from "react-custom-scroll";

const ClientCard = () => {
    const [accounts, setAccounts] = useState([]);

    const numberFormatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
    })

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
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <div className="clientcardcontainer">
            <CustomScroll heightRelativeToParent="100%">
            {accounts.map(account => (
                <div key={account.id} className="clientcard">
                    <p className="acctitle">Account Number:    <span>{account.number}</span></p>
                    <p className="acctitle">Balance:</p>
                    <span className="accbalance">{numberFormatter.format(account.balance)}</span>
                    <p className="acctitle">Creation Date: <span>{account.creationDate}</span></p>                 
                </div>
            ))}
            </CustomScroll>

        </div>
    );
};

export default ClientCard;