import { useState } from "react";
import { Restaurant } from "../restaurant/component.jsx";
import { RestaurantTabs } from "../tabs/component.jsx";
import "./style.css";

export const Restaurants = ({ restaurants }) => {
	const [active, setActiveRestaurant] = useState(0);

	if (restaurants.length === 0) {
		return <div>Restaurants not found.</div>;
	}

	return (
		<>
			<RestaurantTabs
				restaurants={restaurants}
				active={active}
				onChange={setActiveRestaurant}
			/>
			<Restaurant restaurant={restaurants[active]} />
		</>
	);
};
