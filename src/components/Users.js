import UserCard from "./UserCard";
import React,{useState,useEffect} from "react";
import Reviews from "./Reviews";
import styled from "styled-components";
import { Route ,Switch} from "react-router-dom";
import AddReviewForm from "./AddReviewForm";

function Users({users}){
   


    return (
      <>
        <UserMain>
      
       {users.map((user)=>{
         return (
           <>
           <UserCard key={user.id} id={user.id} user={user} /> 
           
           </>
         );
   
       },
       
       )}
    
        </UserMain>
        
        </>
    )
}
export default Users;

const UserMain=styled.div`
background-color:#191970;
`