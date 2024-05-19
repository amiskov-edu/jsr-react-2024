export const Menu = ({menu}) => {
    return <ul>
        {menu.map(dish =>
            <li>
                {dish.name} - {dish.price} ({dish.ingredients.join(', ')})
            </li>)}
    </ul>
}
