import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component.jsx";
import { useEffect, useState } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors.js";
import { selectRequestStatus } from "../../redux/ui/request/selectors";

export const MenuContainer = ({ restaurantId }) => {
  const [request, setRequest] = useState();
  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId),
  );
  console.log(status);
  const dispatch = useDispatch();
  useEffect(() => {
    const req = dispatch(
      getDishesByRestaurantId({ restaurantId, forceRefetch: true }),
    );
    setRequest(req);
    return () => {
      // Чтобы заметить, нужно выставить таймаут > 0 в `simple_api/utils.js`
      // и потыкать на разные табы. Вернутся данные только для последнего
      // выбранного в таймауте ресторана, остальные запросы отменятся (`rejectd`).
      req.abort("Aborted from useEffect return function.");
    };
  }, [dispatch, restaurantId]);

  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId),
  );
  if (!dishIds) {
    return;
  }
  return <Menu dishIds={dishIds} />;
};
