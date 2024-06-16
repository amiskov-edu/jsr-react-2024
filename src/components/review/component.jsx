import { ReviewUser } from "../review-user/component";

export const Review = ({ review }) => {
  if (!review) {
    return;
  }
  return (
    <>
      <i>
        <ReviewUser id={review.userId} /> ({review.rating})
      </i>{" "}
      {review.text}
    </>
  );
};
