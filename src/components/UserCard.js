import userEvent from "@testing-library/user-event";
import styled from "styled-components";
function UserCard({user}){
    const{id,image,name,about}=user;
    return(
        <UserContainer>
        <img src={image} />
        <h2>Name:{name}</h2>
        <p>About:{about}</p>

        </UserContainer>
    )
}
export default UserCard;

const UserContainer=styled.div`
display: inline-block;
margin: 32px;
text-align: center;
border-radius:7px;
width: 410px;
height: 400px;
margin:20px;
padding:15px;
color:white;
background:#ff69b4;
overflow-x:auto;
& img{
    width:290px;
    height:280px;
}

`