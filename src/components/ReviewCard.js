import Reviews from "./Reviews";

import styled from "styled-components";
import {useParams} from "react-router-dom";
function ReviewCard({review}){
    const {id}=useParams();
    const{image,link,price,size,user_id}=review;
    return(
        <>
        <h1>Card</h1>
          <img src={image} />
         <h3 src={link} >Store</h3>
          <h2>{price}</h2>
          <h2>{size}</h2>
          
        </>
    )
}
export default ReviewCard;





