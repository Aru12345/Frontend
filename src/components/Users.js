import UserCard from "./UserCard";
import React,{useState,useEffect} from "react";

function Users({users}){
   
    return (
        <>
       
       {users.map((user)=>{
         return (
           <UserCard key={user.id} user={user}/> 
         );
       })}
       
        </>
    )
}
export default Users;