import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component.jsx";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-by-restaurant-id.js";
import { selectRestaurantReviews } from "../../redux/entities/restaurant/selectors.js";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch]);
  const reviewIds = useSelector(state => selectRestaurantReviews(state, restaurantId));
  if (!reviewIds) {
    return;
  }
  return <Reviews reviewIds={reviewIds} />
};
