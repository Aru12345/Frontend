import UserCard from "./UserCard";
import React,{useState,useEffect} from "react";

function Users({fullUsers, usersApi}){
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
     if(filteredUsers.length < 1){
       fetch(usersApi)
      .then(res => res.json())
      .then(usersData => {
        setFilteredUsers(usersData)
      })
     }
     }, [])
    return (
        <>
        <div>
        <h1>Users</h1>
        <h1 >Search for a user</h1>
        <label>Search by name :  </label>
        <input type="text" name="search" />
        </div>
       {filteredUsers.map(user => <UserCard key={user.id} user={user}/>)}
        </>
    )
}
export default Users;