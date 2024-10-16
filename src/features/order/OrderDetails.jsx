import { useSelector } from "react-redux";

function OrderDetails() {
  const cart = useSelector((store) => store.cart.cart);
  const name = useSelector((store) => store.user.fullname);

  const priceToPay = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="space-y-8 px-4 py-6">
      <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
        Order Details
      </span>

      {/* 
      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul> */}

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-md font-medium text-stone-600">
          Hey
          <span className="text-2xl capitalize"> {name},</span>
        </p>

        <p className="font-bold tracking-widest">
          You have to pay{" "}
          <span className="text-2xl text-green-600"> ${priceToPay}.00</span> on
          delivery
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
