import { Counter } from "../counter/component.jsx";
import { useUser } from "../../contexts/user-context.jsx";
import { selectDishCount } from "../../redux/ui/cart/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/ui/cart/index.js";

const min = 0;
const max = 7;

export const Dish = ({ id }) => {
  const user = useUser();

  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment(id));
  const handleDecrement = () => dispatch(decrement(id));

  const count = useSelector((state) => selectDishCount(state, id));
  const dish = useSelector((state) => state.dish.entities[id]);

  if (!dish) {
    return;
  }
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
