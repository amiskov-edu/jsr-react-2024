import "./style.css";
import { Restaurant } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors"
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) {
    return;
  }
  return (
    <Restaurant restaurant={restaurant} />
  );
};
