import {Counter} from '../counter/component.jsx'
import {useCount} from '../../hooks/use-count.js';
import {useUser} from '../../contexts/user-context.jsx'

const min = 0;
const max = 7;

export const Dish = ({dish}) => {
    const {count, increment, decrement} = useCount({min, max});
    const user = useUser();
    return <>
        {dish.name} - {dish.price} ({dish.ingredients.join(', ')})
        {user && <>
            <Counter count={count} increment={increment} decrement={decrement} min={min} max={max}/>
            {count > 0 && <b>${dish.price * count}</b>}
        </>
        }
    </>
}
