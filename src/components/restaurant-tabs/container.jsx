import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";

export const RestaurantTabsContainer = ({ activeRestaurantId, onTabClick }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();
  if (isLoading) {
    return <div>Loading restaurants...</div>;
  }
  if (!restaurants) {
    return <div>No restaurants found.</div>;
  }
  return (
    <RestaurantTabs
      restaurants={restaurants}
      activeRestaurantId={activeRestaurantId}
      onTabClick={onTabClick}
    />
  );
};
