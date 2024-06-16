import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({ id, isActive, onTabClick }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[id]);
  if (!restaurant) {
    return;
  }
  return <Tab title={restaurant.name} isActive={isActive} onClick={onTabClick} />
};
