// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);

  return (
    <div className="max-w-screen-md mx-auto mt-12">
      {!cart.length ? (
        <p className="text-2xl text-center tracking-widest capitalize">
          Your Cart is empty.
        </p>
      ) : (
        <>
          <p className="text-2xl text-center tracking-widest capitalize">
            Your cart
          </p>
          <ul className="divide-y divide-stone-300">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div>
            <button className="btn">
              <Link to="/order">order now</Link>
            </button>
            <button className="btn-trans" onClick={() => dispatch(clearCart())}>
              clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
