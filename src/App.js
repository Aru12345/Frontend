
import "./App.css";

import Home from './components/Home';
import Users from './components/Users';
import NewUserForm from './components/NewUserForm';

import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState ,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import styled from "styled-components";
import Reviews from "./components/Reviews";
import AddReviewForm from "./components/AddReviewForm";
const usersApi="http://localhost:9292/users"
function App() {
 
  const[users,setUsers]=useState([]);
  const[reviews,setReviews]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");

  useEffect(() => {
    document.title = "ABc"
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

 useEffect(()=>{
  fetch("http://localhost:9292/reviews")
  .then(res=>res.json())
  .then(reviewData=>{
    setReviews(reviewData)
  })
},[])

const displayedReviews=reviews.filter((review)=>{
  return review.name
});

 function handleAddReviews(newReview){
  console.log("in handle add review", newReview)
  setReviews([...reviews,newReview]);
 
}

const handleDelete = (id) =>{
  fetch(`http://localhost:9292/reviews/${review.id}`,{
    method:'DELETE',
    headers:{'Content-Type':'application/json'}
  })
  .then(res=>res.json())
  .then(data=>{
    setReviews(reviews.filter(r=>r.id !==id))
  })
}


  return (
    <AppContainer>
     <Navbar />
      <Switch>


       <Route exact path="/users">
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
          <Users users={displayedUsers}/>
       </Route>
      <Route path="/addUser">
          <NewUserForm onAddUser={handleAddUsers} />
      </Route>


      <Route exact path="/users/:id">
           <Reviews reviews={reviews} users={users} handleDelete={handleDelete}/>
        </Route>
        <Route path="/users/:user_id/reviews/new">
            <AddReviewForm onAddReview={handleAddReviews}  users={displayedUsers}/>
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