import Image from 'next/image';
import { TrashSVG } from '@/modules/cart/svg';
import QuantityInput from '@/modules/cart/components/quantity-input';
import { convertToCurrency } from '@/utils/convertCurrency';

interface IMovieCart {
  imgSrc: string;
  title: string;
  price: number;
  quantity: number;
  handleQuantity: (value) => void;
  handleDelete: () => void;
}

const MovieCart = ({ imgSrc, title, price, quantity, handleQuantity, handleDelete }: IMovieCart) => {
  return (
    <div className="flex w-full">
      <Image
        src={imgSrc}
        alt={title}
        className="w-16 h-20 md:w-[91px] md:h-[114px] sm:mr-3.5"
        width={91}
        height={114}
      />

      <div className="w-full text-secondary flex flex-col sm:flex-row max-sm:justify-between">
        <div className="flex sm:flex-col w-full sm:w-40 items-center sm:items-start justify-between sm:justify-center sm:gap-1">
          <p className="font-bold text-sm text-wrap  max-sm:mx-3.5 line-clamp-2">{title}</p>

          <div className="flex gap-4">
            <span className="font-bold text-base">{convertToCurrency(price)}</span>

            <button onClick={handleDelete} className="sm:hidden">
              <TrashSVG />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between sm:w-full">
          <div className="mx-3.5 max-w-[117px]">
            <QuantityInput value={quantity} handleChange={handleQuantity} />
          </div>

          <div>
            <span className="font-bold text-xs sm:hidden">SUBTOTAL</span>
            <p className="font-bold text-base">{convertToCurrency(price * quantity)}</p>
          </div>

          <button onClick={handleDelete} className="hidden cursor-pointer sm:block">
            <TrashSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
