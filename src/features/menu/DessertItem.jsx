function DessertItem({ item }) {
  if (!item) return;

  const { name, img, description, price } = item;

  return (
    <li className="flex py-3 gap-4">
      <img src={img} className="h-28 w-40 object-cover" />
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic">{description}</p>
        <div className="mt-auto flex justify-between items-center">
          <p>${price}.00</p>
          <button className="btn-sm">Add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default DessertItem;
