import { useSelector } from "react-redux";

export const RestaurantTab = ({ id, isActive, onClick }) => {
  const restaurant = useSelector((state) => state.restaurant.entities[id]);
  if (!restaurant) {
    return;
  }
  return (
    <button disabled={isActive} onClick={() => onClick(id)}>
      {restaurant.name}
    </button>
  );
};
