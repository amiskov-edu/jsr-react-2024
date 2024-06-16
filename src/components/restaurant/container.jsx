import "./style.css";
import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";

export const RestaurantContainer = ({ id }) => {
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    skip: !id,
    selectFromResult: selectRestaurantFromResult(id),
  });

  if (isLoading) {
    return <div>Loading restaurant...</div>;
  }
  if (!restaurant) {
    return <div>Restaurant not found.</div>;
  }
  return <Restaurant restaurant={restaurant} />;
};
