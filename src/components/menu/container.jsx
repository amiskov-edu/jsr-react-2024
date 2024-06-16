import { Menu } from "./component.jsx";
import { useGetMenuByRestaurantIdQuery } from "../../redux/service/api/index.js";

export const MenuContainer = ({ restaurantId }) => {
  const { data: dishes, isFetching } =
    useGetMenuByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading menu...</div>;
  }
  if (!dishes) {
    return <div>No dishes</div>;
  }
  return <Menu dishes={dishes} />;
};
