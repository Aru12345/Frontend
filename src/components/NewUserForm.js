import React,{useState} from "react";
import {Button} from '@material-ui/core';
function NewUserForm({onAddUser}){
    const[formData,setFormData]=useState({
        image:'',
        name:'',
        about:''
       
    })
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
    
        const newUser ={
            ...formData
        };
    
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((r) => r.json())
          .then(onAddUser);
        
    
        
    
      }
    return (
        <>
         <form onSubmit={handleSubmit}>
           <h3>Create Your Profile</h3>
           <label>Profile Picture:</label>
           <input type="text" name="image" aria-label="image" value={formData.image} onChange={handleChange}  ></input>
           
           <label>Name:</label>
           <input type="text" name="name" aria-label="name" value={formData.name} onChange={handleChange} ></input>
           
           <label>About:</label>
           <input type="text" name="about" aria-label="about" value={formData.about}  onChange={handleChange}></input>
           
          
          
          
          <Button variant="contained" color="success" class="submit" type="submit">
         Submit
</Button>
      </form>
        </>
    )
}
export  default NewUserForm;