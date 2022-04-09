import React from "react";

import { NavLink} from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "170px",
    padding: "15px",
    margin: "0px 22px 0px 2px",
    background:"pink",
    textDecoration: "none",
    color: "white",
    fontSize:"20px",
    fontFamily:"serif",
    
    
    
    
  }
function Navbar(){
return (
    <>
     <h1>Shades of Fashion</h1>
     <navbar>
     <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#4E0099",}}>
        Home
    </NavLink>
     
    
    <NavLink to="/users" exact style={linkStyles} activeStyle={{background: "#4E0099",}}>
       Users
    </NavLink>
    <NavLink to="/addUser" exact style={linkStyles} activeStyle={{background: "#4E0099",}}>
       Create a Profile
    </NavLink>
     
    
     
       
     </navbar>
    </>
)

}
export default Navbar;