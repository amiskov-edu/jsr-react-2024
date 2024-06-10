import { useSelector } from "react-redux";
import { Menu } from "../menu/component.jsx";
import { Reviews } from "../reviews/component.jsx";
import "./style.css";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[id]);
  if (!restaurant) {
    return;
  }
  const { name, reviews } = restaurant;
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <Menu restaurantId={id} />
      <Reviews reviewIds={reviews} />
    </div>
  );
};
