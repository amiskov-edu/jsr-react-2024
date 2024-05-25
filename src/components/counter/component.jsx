export const Counter = ({ count, increment, decrement, min, max }) => {
    return <span>
        <button onClick={() => decrement(count)} disabled={count === min}>-</button>
        {count}
        <button onClick={() => increment(count)} disabled={count === max}>+</button>
    </span>
}
