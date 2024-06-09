import { useState } from "react";
import { Restaurant } from "../restaurant/component.jsx";
import { RestaurantTabs } from "../restaurant-tabs/component.jsx";
import "./style.css";
import { useSelector } from "react-redux";

export const Restaurants = () => {
	const restaurantIds = useSelector((state) => state.restaurant.ids);
	const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

	if (restaurantIds.length === 0) {
		return <div>Restaurants not found.</div>;
	}

	return <>
		<RestaurantTabs
			activeRestaurant={activeRestaurantId}
			onChange={setActiveRestaurantId}
		/>
		<Restaurant id={activeRestaurantId} />
	</>
};
