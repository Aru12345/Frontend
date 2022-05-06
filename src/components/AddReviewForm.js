import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function AddReviewForm({onAddReview}){
 
  const history = useHistory()
  const params=useParams()
  
console.log(params)
    const [reviewData, setreviewData] = useState({
    
        image:'',
        product:'',
        link:'',
        price:'',
        size:'',
        styleNote:''
      })

      function handleReviewChange(event){
            setreviewData({
                ...reviewData,
                [event.target.name]: event.target.value,

            });
      }

      function handleReviewSubmit(event) {
        event.preventDefault();
     
        const newReview ={
            ...reviewData,
            user_id:params.user_id
        };
    
        fetch(`http://localhost:9292/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        })
          .then((r) => r.json())
          .then(onAddReview);
          history.goBack()
         
        
    
      }
   
    return(
        <>
        
           <form onSubmit={handleReviewSubmit} >
           <h2>Add Review</h2>
           <label>Image:</label>
           <input type="text" name="image" aria-label="image" value={reviewData.image} onChange={handleReviewChange}  ></input>
           
           <label>Product:</label>
           <input type="text" name="product" aria-label="product" value={reviewData.product} onChange={handleReviewChange} ></input>
           
           <label>Store:</label>
           <input type="text" name="link" aria-label="link" value={reviewData.link}  onChange={handleReviewChange}></input>
           
           <label>Price:</label>
           <input type="text" name="price" aria-label="price" value={reviewData.price}  onChange={handleReviewChange}></input>

           <label>Size:</label>
           <input type="text" name="size" aria-label="size" value={reviewData.size}  onChange={handleReviewChange}></input>
           
           <label>StyleNote:</label>
           <input type="text" name="styleNote" aria-label="styleNote" value={reviewData.styleNote}  onChange={handleReviewChange}></input>
          
           <input class="submit" type="submit" />
            </form>
       
        </>
    )
}

export default AddReviewForm;