import UserCard from "./UserCard";
import React,{useState,useEffect} from "react";
import styled from "styled-components";

function Users({users}){
   
    return (
        <UserMain>
       
       {users.map((user)=>{
         return (
           <UserCard key={user.id} user={user}/> 
         );
       })}
       
        </UserMain>
    )
}
export default Users;

const UserMain=styled.div`
background-color:#da3287;
`