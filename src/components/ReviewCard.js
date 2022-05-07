import Reviews from "./Reviews";

import styled from "styled-components";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
function ReviewCard({review,handleDelete}){
  function handleDeleteClick() {
 
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",

    })
    handleDelete(review.id)
    

  } 
    const {id}=useParams();
    const{image,product,link,price,size,styleNote,user_id}=review;
    return(
        <ReviewContainer>
        
          <img src={image} />
          <h2>{product}</h2>
         <h3 ><a href={link} target="_blank">Store</a></h3>
          <h2>{price}$</h2>
          <h3>Size-{size}</h3>
          <h4>{styleNote}</h4>
          <button onClick={handleDeleteClick} >Delete</button>

          
        </ReviewContainer>
    )
}
export default ReviewCard;

const ReviewContainer=styled.div`


margin-left:8%;
margin-bottom:4%;
margin-top:20%%;
padding-left:5;
text-align: center;
border-radius:7px;
width: 800px;
height: 350px;

padding:15px;
color:white;
background:#FF7F50;
overflow-x:auto;
& img{
   
    border-radius:5px;
    margin-top:1%;
    width:310px;
    height:350px;
    float:left;
}

& button{
  background:#191970;
}
& a{
  color:white;
  text-decoration:none;
}
& a:hover{
  color:blue
}
`
