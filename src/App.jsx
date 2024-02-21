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
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <MainLayout>
        <WelcomeBanner></WelcomeBanner>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/accounts' element={<Home/>} />
          <Route path='/cards' element={<Cards/>} />
          <Route path='/loans' element={<Loans/>} />
          <Route path='/addloan' element={<ReqLoan/>} />
          <Route path='/addacc' element={<ReqAccount/>} />
          <Route path='/addcard' element={<ReqCard/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App
