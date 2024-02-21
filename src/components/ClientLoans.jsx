import React, { useEffect, useState } from "react";
import axios from "axios";


const ClientLoans = () => {

    const [loans, setLoans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/1")
            .then(response => {
                const clientData = response.data;
                setLoans(clientData.clientloans);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <>
            <div className="loancardscontainer">
            {loans.map(loan => (
                <div key={loan.id} className="loancardcontainer">
                    <p>Amount: ${loan.amount}</p>
                    <p>Payments: {loan.payments}</p>
                    <p>Type of Loan: {loan.name}</p>
                </div>
            ))}
        </div>
        </>
    )

}

export default ClientLoans;