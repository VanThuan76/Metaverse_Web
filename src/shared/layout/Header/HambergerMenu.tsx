import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/src/shared/components/ui/sheet';
import { menuWebsitePath } from '@/src/shared/constants/menu';
import TextLogo from '@/src/shared/components/common/website/TextLogo';
import SwitchLanguageMode from '@/src/shared/components/custom/SwitchLanguageMode';
import useTrans from '@/src/shared/hooks/useTrans';
import ListMenu from './ListMenu';

const HambergerMenu = () => {
  const { trans } = useTrans();
  const router = useRouter();
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='w-full bg-[var(--primary-color)] text-white' side={'top'}>
          <div className='flex-col-between-start h-full w-full'>
            <div className='-mt-5 grid w-full cursor-pointer grid-cols-2 items-center justify-between gap-5 md:grid-cols-3'>
              <TextLogo onClick={() => router.push('/')} className='text-lg md:text-2xl lg:text-4xl' />
              <h1 className='hidden text-center text-lg font-bold sm:block'>{trans.common.business.title}</h1>
              <SwitchLanguageMode className='flex w-full items-end justify-end pr-5 md:hidden md:pr-0' />
            </div>
            <div className='flex-col-start mt-5 h-full w-full gap-4'>
              <ListMenu menuPath={menuWebsitePath} className='!-left-3 !bottom-0 !h-[25px] !w-[2px]' />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HambergerMenu;
