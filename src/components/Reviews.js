   
import ReviewCard from "./ReviewCard";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { useHistory ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Reviews({reviews}){
    
    const {id}=useParams();

    return (
        <ReviewMain>
         <Link to="/users"><button >Go Back</button></Link>
        <Link to="/addReview"><button>Add a Review</button></Link>
       {reviews.map((review)=>{
         return (
           <ReviewCard key={review.id} id={review.id} review={review}/> 
         );
       })}
       
        </ReviewMain>
    )
}
export default Reviews;

const ReviewMain=styled.div`
background-color:#da3287;
`