import { convertToCurrency } from '@/utils/convertCurrency';
import { ButtonHTMLAttributes } from 'react';
import { CartPlus } from '@/modules/home/svg';

import Image from 'next/image';
import PrimaryButton from '@/share/components/primary-button';
import Card from '@/share/components/card';

interface IMovieCard {
  srcImage: string;
  title: string;
  price: number;
  qtdCart?: number;
  handleAddCart?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

const MovieCard = ({ srcImage, title, price, handleAddCart, qtdCart = 0 }: IMovieCard) => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-3">
        <Image src={srcImage} alt={title} width={147} height={188} />

        <p className="text-gray-400 font-bold text-xs">{title}</p>

        <span className="text-secondary font-bold text-base">{convertToCurrency(price)}</span>

        <PrimaryButton onClick={handleAddCart} isActive={qtdCart > 0}>
          <div className="flex items-center justify-center">
            <CartPlus />
            <span className="font-normal pl-0.5 pr-3 text-xs">{qtdCart}</span>

            <p className="text-xs">ADICIONAR AO CARRINHO</p>
          </div>
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default MovieCard;
