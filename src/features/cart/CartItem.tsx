import { formatCurrency } from '../../utils/helpers';
import { CartType, getCartQuantityById } from './cartSlice';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useAppDispatch, useAppSelector } from '../../store';

function CartItem({ item }: { item: CartType }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useAppDispatch();
  const currentQuantity = useAppSelector(getCartQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
