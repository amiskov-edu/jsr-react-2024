import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({ restaurantIds, activeRestaurantId, onTabClick }) => {
  return (
    <div className="tabs">
      {restaurantIds.map(id => {
        return <RestaurantTabContainer
          id={id}
          isActive={id === activeRestaurantId}
          onTabClick={() => onTabClick(id)}
        />
      })}
    </div>
  );
};
