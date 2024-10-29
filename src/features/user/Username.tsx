import { useAppSelector } from '../../store';

function Username() {
  const userName = useAppSelector((state) => state.user.username);

  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
