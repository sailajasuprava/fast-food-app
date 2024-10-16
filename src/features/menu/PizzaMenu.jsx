import { useLoaderData } from "react-router-dom";
import PizzaItem from "./PizzaItem";
import { getPizza } from "../../services/apiMenu";

function PizzaMenu() {
  const pizzas = useLoaderData();

  if (!pizzas.length) return;

  return (
    <ul className="divide-y divide-stone-300">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} item={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getPizza();
  return data;
}

export default PizzaMenu;
