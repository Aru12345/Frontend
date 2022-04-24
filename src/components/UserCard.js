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
margin-left:8%;
margin-bottom:2%;
margin-top:3%;
text-align: center;
border-radius:7px;
width: 300px;
height: 500px;

padding:15px;
color:white;
background:#ff69b4;
overflow-x:auto;
& img{
    box-shadow: 5px 6px #da3287;
    border-radius:5px;
    margin-top:9%;
    width:250px;
    height:320px;
}

`