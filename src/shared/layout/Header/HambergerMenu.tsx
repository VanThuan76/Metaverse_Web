import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/src/shared/components/ui/sheet';
import { menuWebsitePath } from '@/src/shared/constants/menu';
import TextLogo from '@/src/shared/components/common/website/TextLogo';
import SwitchLanguageMode from '@/src/shared/components/custom/SwitchLanguageMode';
import useTrans from '@/src/shared/hooks/useTrans';
import DropdownMenuCustomize from '@/src/shared/components/custom/DropdownMenu';

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
              {menuWebsitePath.map((item, idx) => {
                const key = item.path as keyof typeof trans.common.business;
                const value = trans.common.business[key];
                return (
                  <SheetClose key={idx}>
                    {item.children ? (
                      <DropdownMenuCustomize title={value} menuItem={item.children} />
                    ) : (
                      <div onClick={() => router.push(`/${item.path}`)}>
                        <div className='relative w-full'>
                          <div className='flex-row-between-center w-full gap-2'>
                            <p>{value}</p>
                          </div>
                          {router.asPath.split('/')[1] === item.path ? (
                            <motion.div
                              className={`absolute -left-3 bottom-0 right-0 z-0 h-[25px] w-[2px] rounded-[8px] bg-white`}
                              layoutId='underline'
                            />
                          ) : null}
                        </div>
                      </div>
                    )}
                  </SheetClose>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HambergerMenu;
