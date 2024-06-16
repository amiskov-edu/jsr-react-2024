export const selectCartModule = state => state.cart;
export const selectDishCount = (state, dishId) => {
    return (selectCartModule(state) && selectCartModule(state)[dishId]) || 0;
}
export const selectCartCount = (state) => Object.values(
    selectCartModule(state)
).reduce((sum, val) => sum + val, 0);
