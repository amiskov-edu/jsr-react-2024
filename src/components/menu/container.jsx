import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component.jsx";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors.js";

export const MenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurantId({ restaurantId }));
  }, [dispatch, restaurantId]);

  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId),
  );
  if (!dishIds) {
    return;
  }
  return <Menu dishIds={dishIds} />;
};
