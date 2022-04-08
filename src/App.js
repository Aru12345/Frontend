
import { responsiveFontSizes } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';
import DisplayUser from './components/DisplayUser';
import Navbar from './components/Navbar';

const usersApi="http://localhost:9292/users"
function App() {
 
  const[userList,setUserList]=useState([]);

  useEffect(()=>{
    fetch(usersApi)
    .then(resp=>resp.json())
    .then(usersData=>{
      setUserList(usersData)
    })
  },[])
 
  return (
    <>
    <Navbar />
    <Users fullUsers={userList} usersApi={usersApi}/>
    <NewUserForm />
    <Home />
    <DisplayUser />


    </>
  )
  
}

export default App;
