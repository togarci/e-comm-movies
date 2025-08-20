import { Movie } from '@/app/modules/home/service/getMovies';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MovieCart extends Movie {
  quantity: number;
}

export type ShoppingCartState = {
  cartItems: MovieCart[];
  isHydrated: boolean;
};

export type ShoppingCartActions = {
  addToCart: (item: MovieCart) => void;
  removeFromCart: (id: number) => void;
};

export const defaultInitState: ShoppingCartState = {
  cartItems: [],
  isHydrated: false,
};

export const useShoppingCartStore = create(
  persist<ShoppingCartState & ShoppingCartActions>(
    (set) => ({
      ...defaultInitState,
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                  : cartItem
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, item],
            };
          }
        }),
      removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    }),
    {
      name: 'shopping-cart',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    }
  )
);
