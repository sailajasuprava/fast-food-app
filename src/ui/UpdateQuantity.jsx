import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

function UpdateQuantity({ id }) {
  const dispatch = useDispatch();
  const inCart = useSelector((store) => store.cart.cart);
  const curr = inCart.filter((item) => item.id === id);
  const currQuantity = curr[0]?.quantity;

  return (
    <span>
      <button
        className="btn-sm"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="px-2">{currQuantity}</span>
      <button
        className="btn-sm"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </span>
  );
}

export default UpdateQuantity;
