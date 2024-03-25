import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from '../redux/actions/authactions'


const ReqCard = () => {
  const [userData,setUserData] = useState({color:'',cardtype:''})
  const dispatch = useDispatch()
  const {login} = authActions;
  const navigate = useNavigate()

  const handleNewCard = async(e)=>{
      const token = localStorage.getItem('token');
      e.preventDefault()
      axios.post("/api/clients/current/cards",userData,{
          headers:{
              
              Authorization: `Bearer ${token}`
          }
      })
      .then((res)=>{
          console.log(res.data)
          alert("Card added!")
          navigate("/")
      })
      .catch((err)=>{
          console.log(err);
          alert("You already have 3 cards of this type.")
      })
  }

  const handleInput = (e) =>{
      setUserData({...userData, [e.target.name]:e.target.value})
      console.log(userData)
  }



    return (
      <>
      <div className="componentcontainer">
          <h3>Add a new card</h3>
          <form onSubmit={handleNewCard} className="Form">
            <fieldset className="Formfield">
            <label htmlFor="cardtype">Select card type</label>
            <select onChange={handleInput} className="selectCard" name="cardtype" id="cardtype">
              <option value="CREDIT">CREDIT</option>
              <option value="DEBIT">DEBIT</option>
            </select>
            <label htmlFor="color">Select card membership (color)</label>
            <select onChange={handleInput} className="selectCard" name="color" id="color">
              <option value="TITANIUM">TITANIUM</option>
              <option value="GOLD">GOLD</option>
              <option value="SILVER">SILVER</option>
            </select>
            <button className="anchor" href="/" type="submit">Apply new card</button>
            </fieldset>
          </form>
      </div>
  </>
    )
}
export default ReqCard;