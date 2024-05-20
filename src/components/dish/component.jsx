export const Dish = ({dish}) => {
    return <>{dish.name} - {dish.price} ({dish.ingredients.join(', ')})</>
}
