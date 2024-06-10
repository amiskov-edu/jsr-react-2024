import { useSelector } from "react-redux";
import { Menu } from "../menu/component.jsx";
import { Reviews } from "../reviews/component.jsx";
import "./style.css";

export const Restaurant = ({ id }) => {
  const { name, menu, reviews } = useSelector(
    (state) => state.restaurant.entities[id],
  );
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviewIds={reviews} />
    </div>
  );
};
