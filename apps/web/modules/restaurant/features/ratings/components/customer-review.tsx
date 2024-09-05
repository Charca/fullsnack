export const CustomerReview = ({
  rating,
  comment,
  date,
  userName,
}: {
  rating: number
  comment: string
  date: string
  userName: string
}) => (
  <div className="bg-green-100 border-green-600 border-2 p-4 rounded-lg flex items-center justify-center text-2xl font-mono text-green-600">
    <ul className="flex flex-col gap-2 p-4 text-base w-full">
      <li>Rating: {rating}</li>
      <li>Comment: {comment}</li>
      <li>Date: {date}</li>
      <li>User Name: {userName}</li>
    </ul>
  </div>
)
