import { Link } from 'react-router-dom';
import SeacrhOrder from '../features/order/SeacrhOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="font-normal tracking-[5px] text-stone-700">
        Fast React Pizza Co.
      </Link>

      <SeacrhOrder />

      <Username />
    </header>
  );
}

export default Header;
