import { memo } from 'react';
import Card from '@/share/components/card';
import PrimaryButton from '@/share/components//primary-button';
import { EmptyStateSVG } from '@/share/svg';
import { useRouter } from 'next/router';

const EmptyState = () => {
  const router = useRouter();

  const handleClick = () => {
    router.reload();
  };

  return (
    <Card>
      <div className="w-[178px] max-sm:mx-auto sm:w-full flex flex-col sm:p-12 gap-7 overflow-hidden items-center">
        <p className="text-center text-secondary font-bold text-xl">{`Parece que não há nada por aqui :(`}</p>

        <EmptyStateSVG />
        <div className="w-44">
          <PrimaryButton onClick={handleClick}>Recarregar página</PrimaryButton>
        </div>
      </div>
    </Card>
  );
};

export default memo(EmptyState);
