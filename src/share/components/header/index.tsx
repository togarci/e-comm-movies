import Link from 'next/link';
import { SVGCart } from '@/share/svg';

import { useShoppingCartStore } from '@/share/store/shopping-cart';

const Header = () => {
  const { cartItems } = useShoppingCartStore();

  return (
    <header className="w-full max-w-container mx-auto py-5 md:py-8 flex justify-center">
      <div className="max-w-container w-full items-center flex justify-between px-5">
        <Link href={'/'}>
          <h1 className="font-bold text-xl">WeMovies</h1>
        </Link>

        <Link href={'/cart'} className="flex gap-3">
          <div className="flex flex-col justify-center items-end">
            <label className="font-semibold text-sm max-md:hidden">Meu Carrinho</label>
            <span className="font-semibold text-xs text-gray-400">{cartItems?.length || 0} items</span>
          </div>
          <SVGCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
