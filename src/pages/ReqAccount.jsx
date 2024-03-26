import React, { useEffect, useState } from "react";
import Anchor from "../components/Anchor";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'


const ReqAccount = () => {

    const [userData,setUserData] = useState({firstname:'',lastname:'',email:'',password:''})
    const dispatch = useDispatch()
    const {login} = authActions;
    const navigate = useNavigate()
    
    const handleNewAccount = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      axios.post("/api/clients/current/accounts", {}, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
          .then((res) => {
            alert('Account created!')
              navigate("/");
          })
          .catch((err) => {
              console.log(err);
              alert('You already have more than 3 accounts.');
          });
  };

  return (
      <div className="componentcontainer">
          <form onSubmit={handleNewAccount} className="Form" >
              <fieldset className="termsandconditions">
                  <p>By creating an account with Lion Bank, you confirm your eligibility, agree to provide accurate information, and undertake to maintain the security of your account credentials. You commit to complying with all applicable laws and regulations, refrain from engaging in illegal activities, and consent to receive communications from Lion Bank. Lion Bank reserves the right to terminate or suspend accounts for any violation of these terms, and may update them at its discretion. These terms are governed by the laws of [Jurisdiction], and any invalid provision shall not affect the validity of the remaining terms.</p>
                  <button className="submitbutton" type="submit">New Account</button>
              </fieldset>
          </form>
      </div>
  );
};

export default ReqAccount;