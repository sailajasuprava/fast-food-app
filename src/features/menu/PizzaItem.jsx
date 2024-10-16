import { useDispatch, useSelector } from "react-redux";

import UpdateQuantity from "../../ui/UpdateQuantity";
import { addItem, removeItem } from "../cart/cartSlice";

function PizzaItem({ item }) {
  const { id, name, imageUrl, ingredients, unitPrice } = item;

  const dispatch = useDispatch();

  // const isInCart = useSelector((store) =>
  //   store.cart.cart.map((item) => item.id)
  // );

  const inCart = useSelector((store) => store.cart.cart);
  const isInCart = inCart.map((item) => item.id);

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice: unitPrice * 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  function handleDelete() {
    dispatch(removeItem(id));
  }

  return (
    <li className="flex py-3 gap-4">
      <img src={imageUrl} className="h-28 w-40 object-cover" />
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between items-center">
          <p className="font-bold">${unitPrice}.00</p>
          <div className="flex gap-4">
            {isInCart.includes(id) ? (
              <>
                <UpdateQuantity id={id} />
                <button className="btn-sm" onClick={handleDelete}>
                  Delete
                </button>
              </>
            ) : (
              <button className="btn-sm" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default PizzaItem;
