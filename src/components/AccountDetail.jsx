import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountDetail = (id) => {
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
    
    const account = accounts[0];
    console.log(account);

    return (
        <div className="clientcardcontainer">
            <div className="clientcard">
                {account && (
                    <>
                        <p className="acctitle">Account Number:  <span>{account.number}</span></p>
                        <p className="acctitle">Balance:</p>
                        <span className="accbalance">{numberFormatter.format(account.balance)}</span>
                        <p className="acctitle">Creation Date: <span>{account.creationDate}</span></p>
                        <table className="tg">
                            <thead>
                                <tr>
                                    <th className="tg-0lax">Amount</th>
                                    <th className="tg-0lax">Description</th>
                                    <th className="tg-0lax">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {account.transactions && account.transactions.map(transaction => (
                                    <tr key={transaction.id}>
                                        <td>{numberFormatter.format(transaction.amount)}</td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default AccountDetail;