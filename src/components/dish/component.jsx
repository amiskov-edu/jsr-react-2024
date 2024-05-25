import {useState} from 'react';

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);
    const inc = () => (count >= 5) ? setCount(5) : setCount(count + 1);
    const dec = () => (count <= 0) ? setCount(0) : setCount(count - 1);

    return <>{dish.name} - {dish.price} ({dish.ingredients.join(', ')})
        <button onClick={dec} disabled={count===0}>-</button>
        {count}
        <button onClick={inc} disabled={count===5}>+</button>
    </>
}
