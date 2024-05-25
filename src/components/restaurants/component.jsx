import { useState } from "react";
import { Restaurant } from "../restaurant/component.jsx";
import "./style.css";

export const Restaurants = ({ restaurants }) => {
	const [active, setActiveRestaurant] = useState(0);

	if (restaurants.length === 0) {
		return <div>Restaurants not found.</div>;
	}

	return (
		<>
			<div className="tabs">
				{restaurants.map(({name}, idx) => (
					<button
						className={idx === active ? "active" : ""}
						onClick={() => setActiveRestaurant(idx)}>
						{name}
					</button>
				))}
			</div>
			<Restaurant restaurant={restaurants[active]} />
		</>
	);
};
