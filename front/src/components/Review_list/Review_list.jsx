import React from 'react'
import Review from '../Review/Review'
import './style.css'

export default function ReviewList({reviews}){
    const reviewElements = reviews.map(review=>
        <li key = {review.id} className="list-group-item background_list"><Review review={review}/></li>
    )
    return(
        <ul className="list-group list-group-flush">
            {reviewElements}
        </ul>
    )
}