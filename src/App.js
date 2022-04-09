
import { responsiveFontSizes } from '@material-ui/core';
import {Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';
import DisplayUser from './components/DisplayUser';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState ,useEffect} from 'react';

const usersApi="http://localhost:9292/users"
function App() {
 
  const[users,setUsers]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");

  useEffect(() => {
    document.title = "Shades of Fashion"
 }, []);
  
 useEffect(()=>{
    fetch("http://localhost:9292/users")
    .then(res=>res.json())
    .then(userData=>{
      setUsers(userData)
    })
 },[])
 
 const displayedUsers=users.filter((user)=>{
   return user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
 });

 function handleAddUsers(newUser){
   setUsers([...users,newUser]);
 }
  return (
    <>
  <Navbar />

 <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
  <Users users={displayedUsers}/>

<NewUserForm  />

  <Home />
 
  <DisplayUser />
  
 
    


    </>
  )
  
}

export default App;
