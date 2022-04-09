import userEvent from "@testing-library/user-event";

function UserCard({user}){
    return(
        <>
        <img src={user.image}></img>
        <h2>{user.name}</h2>
        <p>{user.about}</p>

        </>
    )
}
export default UserCard;