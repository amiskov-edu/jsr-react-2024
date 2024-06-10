import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../dish/component.jsx";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js";

export const Menu = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  const dishes = useSelector((state) => state.dish.entities);
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {Object.values(dishes).map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
