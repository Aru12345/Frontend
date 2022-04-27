
import "./App.css";

import Home from './components/Home';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';

import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState ,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';


import styled from "styled-components";

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
    <AppContainer>
  <Navbar />
<Switch>
  <Route path="/users">
  <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
  <Users users={displayedUsers}/>
 </Route>
 <Route path="/addUser">
<NewUserForm onAddUser={handleAddUsers} />
</Route>
<Route path="/">
  <Home />
  </Route>
  

  </Switch>
    


    </AppContainer>
  )
  
}

export default App;
const AppContainer =styled.div`
background:#da3287

`