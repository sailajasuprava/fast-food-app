import { useDispatch } from "react-redux";

import UpdateQuantity from "../../ui/UpdateQuantity";
import { removeItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between py-3">
      <div>
        {item.quantity} x {item.name}
      </div>

      <div className="flex gap-4 items-center">
        <span className="font-semibold text-sm">${item.totalPrice}.00</span>
        <UpdateQuantity id={item.id} />
        <button
          className="btn-sm"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
