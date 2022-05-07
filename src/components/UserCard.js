
import { Switch,Route } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function UserCard({user}){
    const{id,image,name,about}=user;
    return(
        
        <UserContainer>
        <img src={image} />
        <h2>{name}</h2>
        <h4>~About~</h4>
        <h3>{about}</h3>
         <Link to={`/users/${id}`}><button >Check out my Blog</button></Link>
        </UserContainer>
      
    )

}
export default UserCard;

const UserContainer=styled.div`
display: inline-block;
margin-left:8%;
margin-bottom:1%;
margin-top:1%;
text-align: center;
border-radius:7px;
width: 300px;
height: 500px;

padding:15px;
color:white;
background:#FF7F50;
overflow-x:auto;
& img{
    border-radius:5px;
    margin-top:1%;
    width:250px;
    height:320px;
}

& button{
    background:	#0000FF;
    color:white;
    width:50%;
    height:10%;
    border-radius:7px;
    textDecoration:none;
    fontWeight:20%;
    padding:15px;
    margin:2%;
    border: none;
   cursor: pointer;
    font-size:80%;
    font-weight: bold;


}

`