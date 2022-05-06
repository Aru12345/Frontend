import Reviews from "./Reviews";

import styled from "styled-components";
import {useParams} from "react-router-dom";
function ReviewCard({review,onDeleteReview}){

    const {id}=useParams();
    const{image,product,link,price,size,styleNote,user_id}=review;
    return(
        <ReviewContainer>
        
          <img src={image} />
          <h2>{product}</h2>
         <h4 src={link} >Store</h4>
          <h2>{price}</h2>
          <h2>{size}</h2>
          <p>{styleNote}</p>
          <button onClick={onDeleteReview}>Delete</button>

          
        </ReviewContainer>
    )
}
export default ReviewCard;

const ReviewContainer=styled.div`
display: inline-block;
margin-left:8%;
margin-bottom:2%;
margin-top:3%;
text-align: center;
border-radius:7px;
width: 300px;
height: 500px;

padding:15px;
color:white;
background:#f75394;
overflow-x:auto;
& img{
    box-shadow: 5px 6px #da3287;
    border-radius:5px;
    margin-top:9%;
    width:250px;
    height:320px;
}

`



