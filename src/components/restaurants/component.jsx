import { useState } from "react";
import { Restaurant } from "../restaurant/component.jsx";
import { RestaurantTabs } from "../tabs/component.jsx";
import "./style.css";
import { useSelector } from "react-redux";

export const Restaurants = () => {
	const restaurantIds = useSelector((state) => state.restaurant.ids);
	const [active, setActiveRestaurant] = useState(restaurantIds[0]);
	const restaurants = useSelector((state) => state.restaurant.entities);

	if (restaurantIds.length === 0) {
		return <div>Restaurants not found.</div>;
	}

	return <>
		<RestaurantTabs
			restaurantIds={restaurantIds}
			restaurants={restaurants}
			active={active}
			onChange={setActiveRestaurant}
		/>
		<Restaurant restaurant={restaurants[active]} />
	</>
};
