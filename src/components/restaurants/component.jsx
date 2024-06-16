import "./style.css";

import { useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  return (
    <div>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
