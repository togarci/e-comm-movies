import { InputHTMLAttributes, useState } from 'react';
import { SubstractionSVG, SumSVG } from '@/modules/cart/svg';

interface IQuantityInput {
  value: number;
  handleChange?: (value) => void;
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
}

const QuantityInput = ({ value, handleChange }: IQuantityInput) => {
  const [qty, setQty] = useState<any>(value || 0);

  const setValue = (valueQty) => {
    const value = valueQty?.replace(/\D/g, '');
    setQty(value);
    handleChange(value);
  };

  return (
    <div className="flex items-center w-full gap-2">
      <button onClick={() => setValue(String(Number(qty) - 1))}>
        <SubstractionSVG />
      </button>

      <input
        className="border w-full text-secondary text-center font-normal text-sm border-gray-100 rounded"
        value={qty}
        onChange={(event) => setValue(event.target.value)}
        type="text"
      />

      <button onClick={() => setValue(String(Number(qty) + 1))}>
        <SumSVG />
      </button>
    </div>
  );
};

export default QuantityInput;
