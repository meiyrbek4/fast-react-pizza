import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading: boolean = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
