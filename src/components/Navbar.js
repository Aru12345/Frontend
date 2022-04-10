import React from "react";

import { NavLink} from "react-router-dom"
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
)

}
export default Navbar;