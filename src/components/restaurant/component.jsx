import { MenuContainer } from "../menu/container.jsx";
import { ReviewsContainer } from "../reviews/container.jsx";
import "./style.css";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <MenuContainer restaurantId={id} />
      <ReviewsContainer restaurantId={id} />
    </div>
  );
};
