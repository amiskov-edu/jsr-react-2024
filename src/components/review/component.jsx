export const Review = ({ review }) => {
  return (
    <>
      <i>
        {review.user} ({review.rating})
      </i>{" "}
      {review.text}
    </>
  );
};
