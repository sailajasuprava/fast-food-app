import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiMenu";
import DessertItem from "./DessertItem";

function DesertMenu() {
  const desserts = useLoaderData();
  console.log(desserts);

  return (
    <ul className="divide-y divide-stone-300">
      {desserts.map((dessert) => (
        <DessertItem key={dessert.id} item={dessert} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getMenu("desserts");
  return data;
}

export default DesertMenu;
