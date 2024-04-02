import { motion } from 'framer-motion';
import { useState } from 'react';
import router from 'next/router';
import useBreakpoint from 'use-breakpoint';
import useTrans from '@/src/shared/hooks/useTrans';
import ButtonMotion from '@/src/shared/components/common/website/ButtonMotion';
import { breakpoints } from '@/src/config/core';

interface Props {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const SolutionCard = (data: Props) => {
  const { trans } = useTrans();
  const [isHovered, setIsHovered] = useState(false);
  const { breakpoint } = useBreakpoint(breakpoints);
  return (
    <motion.div
      className={`flex border-collapse cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-[#555] p-2 md:p-3 lg:p-5 ${
        isHovered ? 'bg-hover-solution-card' : 'bg-default-solution-card'
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(true)}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <div className='mb-2'>{data.icon}</div>
      <div className='flex flex-col items-center justify-center gap-2 text-center md:gap-3 lg:gap-5'>
        <div className='flex min-h-[60px] w-full flex-col items-center justify-center'>
          {data.title.split('//').map((item: string, idx: number) => (
            <h3 key={idx} className='text-base font-medium leading-4 md:text-lg md:leading-6 lg:text-2xl lg:leading-8'>
              {item}
            </h3>
          ))}
        </div>
        <ButtonMotion
          text={trans.common.find_more}
          isMount={breakpoint !== 'sm' && breakpoint !== 'lg' && breakpoint !== 'md' ? true : isHovered}
          onClick={() => router.push(`solution/${data.link}`)}
        />
      </div>
    </motion.div>
  );
};

export default SolutionCard;
