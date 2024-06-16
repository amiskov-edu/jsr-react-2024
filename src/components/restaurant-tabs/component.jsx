import { Tab } from "../tab/component";

export const RestaurantTabs = ({
  restaurants,
  activeRestaurantId,
  onTabClick,
}) => {
  return (
    <div className="tabs">
      {restaurants.map(({ name, id }) => {
        return (
          <Tab
            title={name}
            isActive={activeRestaurantId === id}
            onClick={() => onTabClick(id)}
          />
        );
      })}
    </div>
  );
};
