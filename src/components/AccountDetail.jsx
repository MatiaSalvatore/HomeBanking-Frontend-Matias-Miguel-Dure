import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountDetail = () => {
    const [accounts, setAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState(null);
    

    const numberFormatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("/api/clients/current", {
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

    const handleAccountChange = (event) => {
        const selectedNumber = event.target.value;
        const selectedAccount = accounts.find(account => account.number === selectedNumber);
        setSelectedAccount(selectedAccount);
    }

    return (
        <div className="accountdetails">
            <div className="clientcarddetails">
                <select onChange={handleAccountChange}>
                    <option value="">Select an account</option>
                    {accounts.map(account => (
                        <option key={account.number} value={account.number}>{account.number}</option>
                    ))}
                </select>
                {selectedAccount && (
                    <>
                        <p className="acctitle">Account Number: <span>{selectedAccount.number}</span></p>
                        <p className="acctitle">Balance:</p>
                        <span className="accbalance">{numberFormatter.format(selectedAccount.balance)}</span>
                        <p className="acctitle">Creation Date: <span>{selectedAccount.creationDate}</span></p>
                        <hr></hr>
        
                        <h3>Transactions</h3>
                        <table className="accountinfo">
                            <thead>
                                <tr>
                                    <th className="tg-0lax">Amount</th>
                                    <th className="tg-0lax">Description</th>
                                    <th className="tg-0lax">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedAccount.transactions.map(transaction => (
                                    <tr key={transaction.id}>
                                        <td>{numberFormatter.format(transaction.amount)}</td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr></hr>
                        <h3>Loans</h3>
                        <table className="accountinfo">
                            <thead>
                                <tr>
                                    <th className="tg-0lax">Amount</th>
                                    <th className="tg-0lax">Description</th>
                                    <th className="tg-0lax">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedAccount.transactions.map(transaction => (
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
