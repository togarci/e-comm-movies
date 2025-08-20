import { memo } from 'react';

interface ICart {
  className?: React.SVGProps<SVGSVGElement>['className'];
}

const Cart = ({ className = 'w-10 h-10 fill-none text-white' }: ICart) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 40 40">
      <path
        fill="currentColor"
        d="M25.684 17.28l-4.779-7.11A1.082 1.082 0 0020 9.714c-.35 0-.698.152-.905.466l-4.779 7.1H9.091c-.6 0-1.091.487-1.091 1.083 0 .098.01.195.044.293l2.77 10.047c.251.91 1.091 1.583 2.095 1.583h14.182a2.19 2.19 0 002.105-1.583l2.771-10.047.033-.293a1.09 1.09 0 00-1.091-1.083h-5.225zm-8.957 0L20 12.51l3.273 4.77h-6.546zM20 25.95c-1.2 0-2.182-.975-2.182-2.167 0-1.193.982-2.168 2.182-2.168s2.182.975 2.182 2.168A2.181 2.181 0 0120 25.95z"
      ></path>
    </svg>
  );
};

export default memo(Cart);
