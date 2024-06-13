import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/component";

export const RestaurantTabs = ({ activeRestaurantId, onChange }) => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  if (!restaurantIds) {
    return;
  }
  return (
    <div className="tabs">
      {restaurantIds.map(id => {
        return <RestaurantTab
          id={id}
          isActive={id === activeRestaurantId}
          onClick={() => onChange(id)}
        />
      })}
    </div>
  );
};
