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

`