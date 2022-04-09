
import { responsiveFontSizes } from '@material-ui/core';
import {Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';
import DisplayUser from './components/DisplayUser';
import Navbar from './components/Navbar';

const usersApi="http://localhost:9292/users"
function App() {
 
  
 
  return (
    <>
  <Navbar />

 
  <Users />

<NewUserForm />

  <Home />
 
  <DisplayUser />
  
 
    


    </>
  )
  
}

export default App;
