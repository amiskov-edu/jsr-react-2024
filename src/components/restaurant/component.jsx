import { Menu } from "../menu/component.jsx";
import { Reviews } from "../reviews/component.jsx";
import "./style.css";

export const Restaurant = ({ restaurant }) => {
  const { name, reviews, id } = restaurant;
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <Menu restaurantId={id} />
      <Reviews reviewIds={reviews} />
    </div>
  );
};
