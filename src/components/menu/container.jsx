import { useSelector } from "react-redux";
import { Menu } from "./component.jsx";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors.js";
import { useRequest } from "../../hooks/use-request.js";
import { useMemo } from "react";
import { REQUEST_STATUS } from "../../redux/ui/request/constants.js";

export const MenuContainer = ({ restaurantId }) => {
  // Без `useMemo` будет бесконечный перерендер, т.к. на каждый рендер будет
  // создаваться новый объект, запускающий перерендер и по кругу.
  const requestParams = useMemo(
    () => ({ restaurantId, forceRefetch: true }),
    [restaurantId],
  );
  const requestStatus = useRequest(getDishesByRestaurantId, requestParams);
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId),
  );

  if (requestStatus === REQUEST_STATUS.pending) {
    return <div>Loading menu...</div>;
  }
  if (!dishIds) {
    return;
  }
  return <Menu dishIds={dishIds} />;
};
