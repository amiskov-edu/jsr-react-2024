import { Reviews } from "./component.jsx";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api/index.js";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  if (isFetching) {
    return <div>Loading reviews...</div>;
  }
  if (!reviews) {
    return;
  }
  return <Reviews reviews={reviews} />;
};
