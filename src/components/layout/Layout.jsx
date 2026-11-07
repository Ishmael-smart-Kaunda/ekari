import Navbar from '../navbar'
import Footer from "../footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout(){
      const {pathname} = useLocation();
      useEffect(()=>{
            window.scrollTo({
            top:0,
            behavior:"smooth"
            })
      },[pathname])
      return(
            <>
                <Navbar/>
                 <main>
                   <Outlet />
                </main>
                <Footer/>
            </>
      )
}   