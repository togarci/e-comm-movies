import { memo } from 'react';

interface ITrashSVG {
  className?: React.SVGProps<SVGSVGElement>['className'];
}

const TrashSVG = ({ className = 'w-4 h-[18px] fill-none text-primary' }: ITrashSVG) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" className={className}>
      <path
        fill="currentColor"
        d="M1.143 16c0 1.1 1.028 2 2.286 2h9.142c1.258 0 2.286-.9 2.286-2V4H1.143v12zM16 1h-4l-1.143-1H5.143L4 1H0v2h16V1z"
      ></path>
    </svg>
  );
};

export default memo(TrashSVG);
