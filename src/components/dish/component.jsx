import { Counter } from '../counter/component.jsx'
import { useCount } from '../../hooks/use-count.js';

const min = 0;
const max = 7;

export const Dish = ({ dish }) => {
    const { count, increment, decrement } = useCount({min, max});
    return <>
        {dish.name} - {dish.price} ({dish.ingredients.join(', ')})
        <Counter count={count} increment={increment} decrement={decrement} min={min} max={max} />
        <b>${dish.price * count}</b>
    </>
}
