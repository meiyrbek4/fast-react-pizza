import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useAppDispatch } from '../../store';

function DeleteItem({ pizzaId }: { pizzaId: number }) {
  const dispatch = useAppDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
