import { memo } from 'react';
import Card from '@/app/share/components/card';
import PrimaryButton from '@/app/share/components//primary-button';
import { EmptyStateSVG } from '@/app/share/svg';
import { useRouter } from 'next/router';

const EmptyState = () => {
  const router = useRouter();

  const handleClick = () => {
    router.reload();
  };

  return (
    <Card>
      <div className="w-[178px] max-sm:mx-auto sm:w-full flex flex-col sm:p-12 gap-7 overflow-hidden items-center">
        <strong className="text-center">Parece que não há nada por aqui :(</strong>

        <EmptyStateSVG />
        <div className="w-44">
          <PrimaryButton onClick={handleClick}>Recarregar página</PrimaryButton>
        </div>
      </div>
    </Card>
  );
};

export default memo(EmptyState);
