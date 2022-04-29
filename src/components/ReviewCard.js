import Reviews from "./Reviews";

import styled from "styled-components";

function ReviewCard({review}){
    const{image,link,price,size,user_id}=review;
    return(
        <>
        <h1>Card</h1>
          <img src={image} />
          <h3>{link}</h3>
          <h2>{price}</h2>
          <h2>{size}</h2>
          
        </>
    )
}
export default ReviewCard;





