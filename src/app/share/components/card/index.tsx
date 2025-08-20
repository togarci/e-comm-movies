import { memo } from 'react';

const card = ({ children }) => {
  return <div className="bg-white rounded w-full h-full p-4">{children}</div>;
};

export default memo(card);
