import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { clear } from "../../redux/ui/cart";

export const CartCounter = () => {
    const count = useSelector(selectCartCount);
    const dispatch = useDispatch();
    const handleClear = () => dispatch(clear());

    return <div>
        <p>Dishes in Cart: {count}</p>
        {count > 0 && <button onClick={handleClear}>Clear Cart</button>}
    </div>;
}