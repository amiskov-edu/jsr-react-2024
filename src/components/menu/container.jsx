import { useSelector } from "react-redux";
import { Menu } from "./component.jsx";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors.js";
import { useCallback, useEffect } from "react";
import { REQUEST_STATUS } from "../../redux/ui/request/constants.js";
import { useLazyRequest } from "../../hooks/use-lazy-request.js";

export const MenuContainer = ({ restaurantId }) => {
  // Без `useMemo` будет бесконечный перерендер, т.к. на каждый рендер будет
  // создаваться новый объект, запускающий перерендер и по кругу.
  // const requestStatus = useRequest(getDishesByRestaurantId, requestParams);
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId),
  );
  const [fetchDishesStatus, fetchDishes] = useLazyRequest(
    getDishesByRestaurantId,
  );
  const handleRefreshClick = useCallback(
    (forceRefetch = true) => {
      fetchDishes({ forceRefetch, restaurantId });
    },
    [fetchDishes, restaurantId],
  );
  useEffect(() => {
    handleRefreshClick(false);
  }, [handleRefreshClick]);

  if (fetchDishesStatus === REQUEST_STATUS.pending) {
    return <div>Loading menu...</div>;
  }
  if (!dishIds) {
    return;
  }
  return <Menu dishIds={dishIds} onRefreshClick={handleRefreshClick} />;
};
