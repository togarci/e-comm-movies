import { CompleteSVG } from '@/modules/complete/svg';
import Card from '@/share/components/card';
import PrimaryButton from '@/share/components/primary-button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

const Complete = () => {
  const router = useRouter();

  return (
    <section className="max-w-container mx-auto px-5">
      <Card>
        <div className=" max-sm:mx-auto w-full flex flex-col sm:p-12 gap-7 overflow-hidden items-center">
          <p className="text-center text-secondary max-sm:w-[178px] font-bold text-xl">Compra realizada com sucesso!</p>

          <CompleteSVG />

          <div className="w-44">
            <Link href="/">
              <PrimaryButton>VOLTAR</PrimaryButton>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default memo(Complete);
