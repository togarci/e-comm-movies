import MovieCard from '@/modules/home/components/movie-card';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useShoppingCartStore } from '@/share/store/shopping-cart';
import EmptyState from '@/share/components/empty-state';
import { Movie } from '@/modules/home/service/getMovies/types';
import { getMovies } from '@/modules/home/service/getMovies';
import { LoadingSpinnerSVG } from '@/share/svg';

const Home = () => {
  const router = useRouter();
  const { cartItems, addToCart } = useShoppingCartStore();

  const [isLoading, setIsLoading] = useState(true);
  const [dataMovies, setDataMovies] = useState<Array<Movie>>([]);

  const handleGetMovies = async () => {
    try {
      const data = await getMovies();
      setDataMovies(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <section className="max-w-container px-5 mx-auto pb-10">
      {isLoading && (
        <div className="flex w-full justify-center">
          <LoadingSpinnerSVG />
        </div>
      )}

      {!isLoading && dataMovies.length > 0 && (
        <div className="grid grid-cols-1 min-[550px]:grid-cols-2 md:grid-cols-3 gap-5">
          {dataMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              srcImage={movie.image}
              title={movie.title}
              price={movie.price}
              qtdCart={cartItems?.find((item) => movie.id === item.id)?.quantity || 0}
              handleAddCart={() => addToCart({ ...movie, quantity: 1 })}
            />
          ))}
        </div>
      )}

      {!isLoading && dataMovies.length === 0 && (
        <div className="h-[596px]">
          <EmptyState />
        </div>
      )}
    </section>
  );
};

export default Home;
