import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import SwitchLanguageMode from '@/src/shared/components/custom/SwitchLanguageMode';
import ThemeModeToggle from '@/src/shared/components/custom/ToggleThemeMode';
import TextLogo from '@/src/shared/components/common/website/TextLogo';
import HambergerMenu from './HambergerMenu';
import ListMenu from './ListMenu';
import { menuWebsitePath } from '@/src/shared/constants/menu';

const HeaderLayoutWebsite = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.section
      initial={{ height: '100px' }}
      animate={{ height: isScrolled ? '80px' : '100px' }}
      transition={{ duration: 0.3 }}
      className={`flex-row-between-center top-0 z-50 w-full gap-5 bg-[var(--main-color)] px-5 text-white transition md:px-10 ${
        isScrolled
          ? 'border-black-300 sticky inset-0 border-b-[1px] border-opacity-50 bg-[var(--primary-color)] bg-opacity-10 text-black backdrop-blur backdrop-filter duration-500 ease-in-out'
          : 'absolute bg-transparent duration-500 ease-in-out'
      }`}
    >
      <div className='flex-row-center cursor-pointer gap-5'>
        <TextLogo onClick={() => router.push('/')} className='text-lg md:text-2xl lg:text-4xl' />
      </div>
      <div className='grid w-full items-center justify-end gap-2 md:grid-cols-1 lg:grid-cols-5'>
        <div className='col-span-4 ml-5 hidden w-full items-end justify-end gap-10 lg:flex'>
          <ListMenu menuPath={menuWebsitePath} />
        </div>
        <div className='lg:flex-row-center col-span-1 flex w-full items-center justify-end gap-4'>
          <SwitchLanguageMode className='hidden md:block' />
          <ThemeModeToggle className='hidden md:block' />
          <HambergerMenu />
        </div>
      </div>
    </motion.section>
  );
};

export default HeaderLayoutWebsite;
