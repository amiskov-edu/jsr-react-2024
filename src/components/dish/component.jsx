import { Counter } from "../counter/component.jsx";
import { useUser } from "../../contexts/user-context.jsx";
import { selectDishCount } from "../../redux/ui/cart/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/ui/cart/index.js";

const min = 0;
const max = 7;

export const Dish = ({ dish }) => {
  const user = useUser();

  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment(dish.id));
  const handleDecrement = () => dispatch(decrement(dish.id));

  const count = useSelector((state) => selectDishCount(state, dish.id));

  return (
    <>
      {dish.name} - {dish.price} ({dish.ingredients.join(", ")})
      {user && (
        <>
          <Counter
            count={count}
            increment={handleIncrement}
            decrement={handleDecrement}
            min={min}
            max={max}
          />
          {count > 0 && <b>${dish.price * count}</b>}
        </>
      )}
    </>
  );
};
