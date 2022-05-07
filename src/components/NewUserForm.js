import React,{useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
function NewUserForm({onAddUser}){
  const history = useHistory()
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
          history.push(`/users/`)
    
        
    
      }
    return (
        <FormContainer>
         <form onSubmit={handleSubmit}>
           <h1>Create Your Profile</h1>
        
           <h2>Join Shades of Fashion today.</h2>
           <label>Profile Picture:</label>
           <input type="text" name="image" aria-label="image" value={formData.image} onChange={handleChange}  ></input>
           
           <label>Name:</label>
           <input type="text" name="name" aria-label="name" value={formData.name} onChange={handleChange} ></input>
           
           <label>About:</label>
           <input type="text" name="about" aria-label="about" value={formData.about}  onChange={handleChange}></input>
           
          
          
          
           <input class="submit" type="submit" />
        

      </form>
        </FormContainer>
    )
}
export  default NewUserForm;

const FormContainer=styled.div`
color:white;
font-size:120%;
width:75%;
border-radius:5px;
margin:auto;


& input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

& input[type=submit] {
  width: 100%;
  background-color:	#FF7F50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:90%;
  
}

& input[type=submit]:hover {

  background-color:	#F08080;
 
  
}

`