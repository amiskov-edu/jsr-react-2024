import { Counter } from "../counter/component.jsx";
import { useUser } from "../../contexts/user-context.jsx";
import { selectDishCount } from "../../redux/ui/cart/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../../redux/ui/cart/index.js";

const min = 0;
const max = 7;

export const Dish = ({ id }) => {
  const user = useUser();

  const dispatch = useDispatch();
  const increment = () => dispatch(CartSlice.actions.increment(id));
  const decrement = () => dispatch(CartSlice.actions.decrement(id));

  const count = useSelector((state) => selectDishCount(state, id));
  const dish = useSelector((state) => state.dish.entities[id]);

  if (!dish) {
    return;
  }
  return (
    <>
      {dish.name} - {dish.price} ({dish.ingredients.join(", ")})
      {true && (
        <>
          <Counter
            count={count}
            increment={increment}
            decrement={decrement}
            min={min}
            max={max}
          />
          {count > 0 && <b>${dish.price * count}</b>}
        </>
      )}
    </>
  );
};
