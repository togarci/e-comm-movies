import { memo } from 'react';

interface ICartPlus {
  className?: React.SVGProps<SVGSVGElement>['className'];
}

const CartPlus = ({ className = 'fill-none w-3.5 h-4 text-white' }: ICartPlus) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 14 15">
      <g clipPath="url(#clip0_17892_447)">
        <path
          fill="currentColor"
          d="M6.267 6H7.4V4.3h1.7V3.167H7.4v-1.7H6.267v1.7h-1.7V4.3h1.7V6zM4 11.1c-.623 0-1.128.51-1.128 1.133 0 .624.505 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133zm5.667 0c-.624 0-1.128.51-1.128 1.133 0 .624.504 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133zm-5.57-1.842l.016-.068.51-.923h4.222c.425 0 .8-.233.992-.584l2.187-3.972-.986-.544h-.006L10.41 4.3 8.845 7.133H4.867l-.074-.153L3.524 4.3l-.538-1.133-.533-1.134H.6v1.134h1.133l2.04 4.3-.765 1.389c-.09.159-.141.346-.141.544 0 .623.51 1.133 1.133 1.133h6.8V9.4H4.238a.144.144 0 01-.142-.142z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_17892_447">
          <path fill="#fff" d="M0 0H13.6V13.6H0z" transform="translate(.033 .9)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(CartPlus);
