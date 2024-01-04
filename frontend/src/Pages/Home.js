import React from "react";
import {Outlet} from'react-router-dom';
import Widget from "./Widgets/Widget";
import Sidebar from './Sidebar/Sidebar';
import auth from '../firebaseinit';
import { signOut } from "firebase/auth";
import{ useAuthState} from 'react-firebase-hooks/auth';
import UserLoggedInUser from "../hooks/UserLoggedInUser";



const Home = () => {
  const user = useAuthState(auth);


  const handleLogout=()=>{
    signOut(auth)
  }

  return (
    <><div className="app">
      <Sidebar handleLogout={ handleLogout}   user={user} />
      <Outlet/>
      <Widget/>

    </div>
    </>
  );
};

export default Home;