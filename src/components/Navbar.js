
import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom"
 
function Navbar(){
      

      const linkStyles = {
            display: "inline-block",
            width: "170px",
            padding: "15px",
            margin: "0px 22px 0px 2px",
            background:"#f75394",
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            fontSize:"20px",
            borderRadius: "10px",
            fontFamily:"serif",
            
          }
          
      return (
            <NavContainer>
                <h1>XYZ</h1>
                
                <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#da3287"}}  >
                     Home
               </NavLink>
              
                <NavLink to="/users" exact style={linkStyles} activeStyle={{background: "#da3287",}} >
                     Users
               </NavLink>
               
               <NavLink to="/addUser" exact style={linkStyles} activeStyle={{background: "#da3287",}} >
                     Create a Profile
               </NavLink>
            </NavContainer>
      )}

export default Navbar;
const NavContainer=styled.div`

display: flex;
justify-content: space-between;
padding: 20px;
background-color:#ff69b4;
color: white;
min-width: 930px;
align-items:center;
align-self: flex-end;
& h1{
      font-size:370%;
    }
    
`