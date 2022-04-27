import React, { useState } from 'react'

function AddReviewForm({user,onAddReview,hideForm}){
    const [formData, setFormData] = useState({
    
        image:'',
        product:'',
        link:'',
        price:'',
        size:'',
        styleNote:''
      })

  function handleChange(e){
    const newFormData = {
      ...formData, [e.target.name]: e.target.value
    }
    setFormData(newFormData)
  }
  function handleSubmit(e){
    e.preventDefault()
    const itemID = member.reviewList.length + 1
    const newItem = {...formData, id:itemID}
    const {id, wishlist} = member
    const newWishList = [...wishlist, newItem]
    const updatedMember = {...member, wishlist:newWishList}
    onAddItem  && onAddItem(updatedMember)
    setFormData({
      id: 0,
      item: "",
      price: "$",
      url: "",
      desc: "",
      specs: "",
      store: "",
      purchased: false
    })
  }
    return(
        <>
        <h1>Add item form</h1>
        </>
    )
}

export default AddReviewForm;