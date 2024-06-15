export const selectRestaurantModule = state => state.restaurant;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
export const selectRestaurantIds = state => selectRestaurantModule(state).ids;
export const selectRestaurantMenu = (state, id) => selectRestaurantById(state, id)?.menu;
export const selectRestaurantReviews = (state, id) => selectRestaurantById(state, id)?.reviews;
