   
import ReviewCard from "./ReviewCard";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { useHistory ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Reviews({reviews,users,user_id,handleDelete}){
 
    const {id}=useParams();
   console.log(reviews)
    let filteredReviews=reviews.filter(review=>review.user_id===parseInt(id))
   
    return (
        <ReviewMain>
         <Link to="/users"><button >Go Back</button></Link>
        <Link to={`/users/${id}/reviews/new`}><button>Add a Review</button></Link>
       { filteredReviews.map((review)=>{
  return (
    <ReviewCard key={review.id} id={review.id} review={review} onDeleteReview={handleDelete}/> 
  );
})}
       
        </ReviewMain>
    )
}
export default Reviews;

const ReviewMain=styled.div`
background-color:#da3287;
`
