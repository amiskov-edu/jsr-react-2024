import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = ({ activeRestaurantId, onTabClick }) => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  if (!restaurantIds) {
    return;
  }
  return (
    <RestaurantTabs 
      restaurantIds={restaurantIds}
      activeRestaurantId={activeRestaurantId}
      onTabClick={onTabClick}
    />
  );
};
