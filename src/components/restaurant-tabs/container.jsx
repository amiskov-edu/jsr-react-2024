import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabsContainer = ({ activeRestaurantId, onTabClick }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
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
