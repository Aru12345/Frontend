import React from "react";

import { NavLink} from "react-router-dom"
<<<<<<< HEAD
import styled from "styled-components";


 
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
          <h1>Shades of Fashion</h1>
          
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
=======
import { AppBar,Box,Toolbar,Typography,Button,IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
     background: '#FB8DA0',
     border: 0,
     borderRadius: 3,
     
     color: 'white',
     height: 48,
     padding: '0 30px',
     margin: '3px',
    
   },
  
 });
 
function Navbar(){
   const classes = useStyles();
return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
          <h1>Shades of Fashion</h1>
          </Typography>
           
         <Button className={classes.root}>
         <NavLink to="/" exact  >
               Home
         </NavLink>
       </Button>
          <Button color="inherit" className={classes.root}>
          <NavLink to="/users" exact  >
               Users
         </NavLink>
         </Button>
       
         <Button className={classes.root}>
         <NavLink to="/addUser" exact >
               Create a Profile
         </NavLink>
        
         </Button>
        </Toolbar>
      </AppBar>
    </Box>
   
  
          
         
            
         
           
          
          
            
              
           
    
  
     
    
     
      
    </>
>>>>>>> 25949201e2018a697f2992164de085f56dd3baf3
)

}
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