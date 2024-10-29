import Button from '../../ui/Button';
import { decreaceItemQuantity, increaceItemQuantity } from './cartSlice';
import { useAppDispatch } from '../../store';

function UpdateItemQuantity({
  pizzaId,
  currentQuantity
}: {
  pizzaId: number;
  currentQuantity: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaceItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaceItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
