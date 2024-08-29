import React from 'react'

interface CustomerReviewProps {
  name: string
  rating: number
  comment: string
}

export const CustomerReview: React.FC<CustomerReviewProps> = ({
  name,
  rating,
  comment,
}) => (
  <div className="bg-white p-4 border mb-2">
    <h4>{name}</h4>
    <p>Rating: {rating}/5</p>
    <p>{comment}</p>
  </div>
)
