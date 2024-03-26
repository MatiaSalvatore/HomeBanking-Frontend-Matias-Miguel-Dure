import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'

const ReqLoan = () => {
    const [userData, setUserData] = useState({ name: '', amount: '', payments: '', accountNumber: '' });
    const [loanTypes, setLoanTypes] = useState([]);
    const [paymentOptions, setPaymentOptions] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const dispatch = useDispatch();
    const { login } = authActions;
    const navigate = useNavigate();

    useEffect(() => {
        fetchLoanTypes();
        fetchUserAccounts();
    }, []);


    const fetchUserAccounts = async () => {
      const token = localStorage.getItem('token');
      try {
          const response = await axios.get("/api/clients/current/accounts", {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          });
          setAccounts(response.data);
      } catch (error) {
          console.error("Error fetching user accounts:", error);
      }
  };

    const fetchLoanTypes = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get("/api/loans", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setLoanTypes(response.data);
        } catch (error) {
            console.error("Error fetching loan types:", error);
        }
    };

    const handleLoanApply = async (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
        axios.post("/api/loans", userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                alert("Loan added to your account!")
            })
            .catch((err) => {
                console.log(err);
                alert("Loan limit exceeded.")
            });
    };

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        console.log(userData);
    };

    const handleLoanTypeChange = (e) => {
        const selectedType = e.target.value;
        const selectedLoan = loanTypes.find(loan => loan.name === selectedType);
        setPaymentOptions(selectedLoan ? selectedLoan.payments : []);
        setUserData({ ...userData, name: selectedType, payments: '' }); // Set name and reset payments when loan type changes
    };

    return (
        <div className="formcontainer">
            <form onSubmit={handleLoanApply}>
                <label htmlFor="name">Type of loan:</label>
                <select onChange={handleLoanTypeChange} value={userData.name} name="name" id="name">
                    <option value="">Select a loan type</option>
                    {loanTypes.map(loan => (
                        <option key={loan.name} value={loan.name}>{loan.name}</option>
                    ))}
                </select>
                <label htmlFor="accountNumber">AccountNumber:</label>
                <select onChange={handleInput} value={userData.accountNumber} name="accountNumber" id="accountNumber">
                    <option value="">Select an account</option>
                    {accounts.map(account => (
                        <option key={account.number} value={account.number}>{account.number}</option>
                    ))}
                </select>
                <label htmlFor="payments">Payments:</label>
                <select onChange={handleInput} value={userData.payments} name="payments" id="payments">
                    <option value="">Select a payment option</option>
                    {paymentOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <label htmlFor="amount">Amount:</label>
                <input onChange={handleInput} type="number" name="amount" id="amount" />
                <button className="submitbutton" type="submit">Apply Loan</button>
            </form>
        </div>
    );
};

export default ReqLoan;