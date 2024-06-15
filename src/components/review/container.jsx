export const ReviewContainer = ({ reviewId }) => {
  return (
    <>
      <i>
        {review.user} ({review.rating})
      </i>{" "}
      {review.text}
    </>
  );
};
