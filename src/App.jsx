import { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Loans from './pages/Loans';
import ReqAccount from './pages/ReqAccount';
import ReqCard from './pages/ReqCard';
import ReqLoan from './pages/ReqLoan';
import WelcomeBanner from './components/ClientBanner';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { withAuth } from './hocs/withAuth';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import authActions from '../src/redux/actions/authactions'

function App() {

  //Autorizaciones
  const HomedWithAuth = withAuth(Home);
  const CardsWithAuth = withAuth(Cards);
  const LoansWithAuth = withAuth(Loans);
  const ReqLoanWithAuth = withAuth(ReqLoan);
  const ReqCardWithAuth = withAuth(ReqCard);
  const ReqAccountWithAuth = withAuth(ReqAccount);

  const [count, setCount] = useState(0)

  const user = useSelector((store)=>store.auth.user)
  const dispatch = useDispatch();
  const {current, login}= authActions

  useEffect(()=>{
      const token = localStorage.getItem('token');
      if (token){
        axios.get("/api/clients/current",{
          headers:{
              Authorization: `Bearer ${token}`
          }
      }).then((res)=>{ 
        console.log("info gotted")
          dispatch(current(res.data))
      })
      }
  },[])
  
  
  return (
      <MainLayout>
        <WelcomeBanner></WelcomeBanner>
        <Routes>
          <Route path='/' element={<HomedWithAuth/>} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/accounts' element={<HomedWithAuth/>}/>
          <Route path='/cards' element={<CardsWithAuth/>} />
          <Route path='/loans' element={<LoansWithAuth/>} />
          <Route path='/addloan' element={<ReqLoanWithAuth/>} />
          <Route path='/addacc' element={<ReqAccountWithAuth/>} />
          <Route path='/addcard' element={<ReqCardWithAuth/>} />
        </Routes>
      </MainLayout>
  );
}

export default App
