import React from 'react'
import { CustomerReview } from '../../components/customer-review'

export const Ratings: React.FC = () => (
  <div className="mb-4">
    <h3>Ratings and Reviews</h3>
    <CustomerReview
      name="Customer Name"
      rating={5}
      comment="CustomerReview content"
    />
  </div>
)
