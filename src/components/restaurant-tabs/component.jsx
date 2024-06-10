import { useSelector } from "react-redux";

export const RestaurantTabs = ({ activeRestaurant, onChange }) => {
  const restaurants = useSelector((state) => state.restaurant.entities);
  if (!restaurants) {
    return;
  }
  return (
    <div className="tabs">
      {Object.values(restaurants).map(({ id, name }) => (
        <button disabled={id === activeRestaurant} onClick={() => onChange(id)}>
          {name}
        </button>
      ))}
    </div>
  );
};
