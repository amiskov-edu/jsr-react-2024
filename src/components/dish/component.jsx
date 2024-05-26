import { Counter } from '../counter/component.jsx'
import { useCount } from '../../hooks/use-count.js';

export const Dish = ({ dish }) => {
    const { count, increment, decrement, min, max } = useCount();
    return <>
        {dish.name} - {dish.price} ({dish.ingredients.join(', ')})
        <Counter count={count} increment={increment} decrement={decrement} min={min} max={max} />
        <b>${dish.price * count}</b>
    </>
}
