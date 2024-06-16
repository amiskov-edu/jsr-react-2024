import { useSelector } from "react-redux";
import { Reviews } from "./component.jsx";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id.js";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors.js";
import { useRequest } from "../../hooks/use-request.js";
import { REQUEST_STATUS } from "../../redux/ui/request/constants.js";
import { useMemo } from "react";

export const ReviewsContainer = ({ restaurantId }) => {
  const requestParams = useMemo(() => ({ restaurantId }), [restaurantId]);
  const requestStatus = useRequest(getReviewsByRestaurantId, requestParams);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId),
  );

  if (requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading reviews...</div>;
  }
  if (!reviewIds) {
    return;
  }
  return <Reviews reviewIds={reviewIds} />;
};
