import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export interface PizzaType {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

function Menu() {
  const menu = useLoaderData() as PizzaType[];

  return (
    <ul className="divide-y divide-stone-300 px-2">
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
