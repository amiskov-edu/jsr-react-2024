import { useSelector } from "react-redux";
import { Review } from "../review/component.jsx";

export const Reviews = ({ reviewIds }) => {
  const reviewEntities = useSelector((state) => state.review.entities);
  const reviews = reviewIds.map((id) => reviewEntities[id]);
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <div>No reviews.</div>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li>
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
