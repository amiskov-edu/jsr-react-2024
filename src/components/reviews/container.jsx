import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component.jsx";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id.js";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors.js";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId),
  );

  if (!reviewIds) {
    return;
  }
  return <Reviews reviewIds={reviewIds} />;
};
