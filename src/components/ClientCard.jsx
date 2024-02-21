import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientCard = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/2")
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
            {accounts.map(account => (
                <div key={account.id} className="clientcard">
                    <p className="acctitle">Account Number:    <span>{account.number}</span></p>
                    <p className="acctitle">Balance:</p>
                    <span className="accbalance">${account.balance}</span>
                    <p className="acctitle">Creation Date: <span>{account.creationDate}</span></p>                    
                </div>
            ))}
        </div>
    );
};

export default ClientCard;