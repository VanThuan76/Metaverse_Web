import { motion } from 'framer-motion';
import { useState } from 'react';
import router from 'next/router';
import IconArrowRight from '@/src/shared/components/icons/IconArrowRight';
import useTrans from '@/src/shared/hooks/useTrans';

interface Props {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const SolutionCard = (data: Props) => {
  const { trans } = useTrans();
  const [isHovered, setIsHovered] = useState(false);
  const buttonVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };
  return (
    <motion.div
      className={`bgDefaultInforCard flex border-collapse cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl p-5 ${
        isHovered ? 'bgHoverInforCard' : ''
      }`}
      style={{ border: '1px solid #555' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
    >
      <div className='flex items-start'>{data.icon}</div>
      <div className='flex flex-col items-center justify-center gap-5 text-center'>
        <div className='flex h-[60px] w-full flex-col items-center justify-center'>
          {data.title.split('//').map((item: string, idx: number) => (
            <h1 key={idx} className='text-base font-medium leading-6 md:text-2xl md:leading-8'>
              {item}
            </h1>
          ))}
        </div>
        <motion.button
          whileHover='hover'
          variants={buttonVariants}
          initial='hidden'
          animate={isHovered ? 'hover' : 'hidden'}
          className={`relative mt-3 flex cursor-pointer items-center justify-between gap-3 rounded bg-[#1B3864] px-4 py-4 text-left text-white`}
          onClick={() => router.push(data.link)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className='text-sm'>{trans.common.find_more}</p>
          <IconArrowRight color='#fff' />
          <motion.div
            className='absolute left-0 top-0 h-full w-0 bg-white'
            variants={buttonVariants}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          ></motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
