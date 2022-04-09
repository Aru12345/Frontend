import userEvent from "@testing-library/user-event";

function UserCard({user}){
    const{id,image,name,about}=user;
    return(
        <>
        <img src={image} />
        <h2>Name:{name}</h2>
        <p>About:{about}</p>

        </>
    )
}
export default UserCard;