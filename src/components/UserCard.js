import userEvent from "@testing-library/user-event";
import styled from "styled-components";
function UserCard({user}){
    const{id,image,name,about}=user;
    return(
        <UserContainer>
        <img src={image} />
        <h2>{name}</h2>
        <h4>~About~</h4>
        <h3>{about}</h3>

        </UserContainer>
    )
}
export default UserCard;

const UserContainer=styled.div`
display: inline-block;
margin: 32px;
text-align: center;
border-radius:7px;
width: 400px;
height: 480px;
margin:20px;
padding:15px;
color:white;
background:#ff69b4;
overflow-x:auto;
& img{
    margin-top:9%;
    width:290px;
    height:300px;
}

`