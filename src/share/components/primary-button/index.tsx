import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IPrimaryButton {
  children: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  isActive?: boolean;
}

const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  isActive = false,
  disabled,
  className = 'py-3 w-full px-3 font-bold text-xs text-center cursor-pointer rounded-sm',
}: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(className, {
        'bg-primary hover:bg-primary/90': !isActive,
        'bg-success hover:bg-success/90': isActive,
      })}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
