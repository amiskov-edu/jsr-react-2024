import { Reviews } from "./component.jsx";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api/index.js";
import { ReviewForm } from "../review-form/component.jsx";
import { useUser } from "../../contexts/user-context.jsx";

export const ReviewsContainer = ({ restaurantId }) => {
  const user = useUser();
  const { data: reviews, isLoading } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  if (isLoading) {
    return <div>Loading reviews...</div>;
  }
  if (!reviews) {
    return;
  }
  return (
    <>
      <Reviews reviews={reviews} />
      {user && <ReviewForm restaurantId={restaurantId} author={user} />}
      {!user && <span>Log in to create your review.</span>}
    </>
  );
};
