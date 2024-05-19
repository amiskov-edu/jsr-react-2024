export const Review = ({review}) => {
    return <p><i>{review.user} ({review.rating})</i> {review.text}</p>
}
