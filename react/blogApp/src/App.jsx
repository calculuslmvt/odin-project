
import { useState } from 'react'
import conf from './conf/conf'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';

function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if(userData)
      dispatch(login(userData))
    else dispatch(logout());
  }). finally(() => setLoading(false));
}, []);

  
  return !loading ? (
    <>
     <div className='bg-slate-700 min-h-screen text-white'>
      <Header/>
      TODO: <Outlet/>
      <Footer/>
      </div> 
    </>
  ): <div> Loading... </div>
}

export default App
