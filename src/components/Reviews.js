   
import ReviewCard from "./ReviewCard";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { useHistory ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Reviews({reviews,setReviews}){
  function handleDelete(id){
    let newReviews=reviews.filter(r=>r.id !== id)
    setReviews(newReviews)
  }
    const {id}=useParams();
   console.log(reviews)
    let filteredReviews=reviews.filter(review=>review.user_id===parseInt(id))
   
    return (
        <ReviewMain>
        
         <Link class="btnc" to="/users"><button>Go Back</button></Link>
        <Link class="btnc" to={`/users/${id}/reviews/new`}><button>Add a Review</button></Link>
    
       
       { filteredReviews.map((review)=>{
  return (
    <ReviewCard key={review.id} id={review.id} review={review} handleDelete={handleDelete}/> 
  );
})}
       
        </ReviewMain>
    )
}
export default Reviews;

const ReviewMain=styled.div`

background-color:#191970;
& btnc{
  float:left
}
& button{
justify-content:center;
  width: 170px;
  padding: 15px;
  background:#0000FF;
  color: white;
  textAlign:center;
  fontSize:20px;
  fontFamily:serif;
  margin:1%;
  margin-bottom:3%;
  border:none;
  border-Radius:3%;
  font-weight:10%;
  font-weight: bold;
}

}
`

