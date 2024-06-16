export const Counter = ({ count, increment, decrement, min, max }) => {
  return (
    <span>
      <button onClick={decrement} disabled={count === min}>
        -
      </button>
      {count}
      <button onClick={increment} disabled={count === max}>
        +
      </button>
    </span>
  );
};
