import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { ReviewUser } from "../review-user/component";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
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
