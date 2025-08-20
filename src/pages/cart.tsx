import { useRouter } from 'next/router';

import Card from '@/share/components/card';
import PrimaryButton from '@/share/components/primary-button';
import { convertToCurrency } from '@/utils/convertCurrency';
import { useShoppingCartStore } from '@/share/store/shopping-cart';
import MovieCart from '@/modules/cart/components/movie-cart';

import { useEffect, useState } from 'react';
import EmptyState from '@/share/components/empty-state';

const Cart = () => {
  const router = useRouter();
  const { cartItems, clearCart, removeFromCart, setQuantity, isHydrated } = useShoppingCartStore();

  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalCartPrice(total);
  };

  useEffect(() => {
    if (isHydrated) {
      calculateTotal();
    }
  }, [cartItems, isHydrated]);

  const handleSubmit = () => {
    clearCart();
    router.push('/complete');
  };

  return (
    <section className="max-w-container mx-auto px-5">
      <Card>
        {cartItems?.length > 0 ? (
          <div className="p-1 sm:p-2">
            <div className="hidden md:grid grid-cols-[254px_1.14fr_1fr] font-bold text-sm text-gray-400 mb-5">
              <span>PRODUTO</span>
              <span>QTD</span>
              <span>SUBTOTAL</span>
            </div>

            <div className="flex flex-col gap-8">
              {cartItems.map((movie) => (
                <MovieCart
                  key={movie.id}
                  imgSrc={movie.image}
                  title={movie.title}
                  price={movie.price}
                  quantity={movie.quantity}
                  handleQuantity={(value) => {
                    setQuantity(movie.id, value);
                    calculateTotal();
                  }}
                  handleDelete={() => {
                    removeFromCart(movie.id);
                    calculateTotal();
                  }}
                />
              ))}
            </div>

            <hr className="bg-gray-400 h-[2px] w-full my-5" />

            <div className="flex items-center max-sm:gap-3 max-sm:flex-col-reverse justify-between">
              <div className="w-full max-sm:text-sm sm:w-[173px]">
                <PrimaryButton
                  className="py-3 w-full px-3 text-white font-bold text-sm sm:text-xs text-center hover:opacity-90 rounded"
                  onClick={handleSubmit}
                >
                  FINALIZAR PEDIDO
                </PrimaryButton>
              </div>

              <div className="flex max-sm:w-full max-sm:justify-between items-center gap-5">
                <p className="font-bold text-sm text-gray-400">TOTAL</p>
                <span className="font-bold text-secondary text-2xl">{convertToCurrency(totalCartPrice)}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[596px]">
            <EmptyState />
          </div>
        )}
      </Card>
    </section>
  );
};

export default Cart;
