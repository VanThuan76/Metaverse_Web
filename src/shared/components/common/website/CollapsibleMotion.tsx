import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import IconBtnPlus from '@/src/shared/components/icons/business/IconBtnPlus';
import IconBtnMinus from '@/src/shared/components/icons/business/IconBtnMinus';
import IconQuote from '@/src/shared/components/icons/business/IconQuote';

interface Props {
  data: { title: string; content: string }[];
}
const CollapsibleMotion = (props: Props) => {
  const { data } = props;
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
      display: 'none',
    },
    visible: {
      display: 'block',
      opacity: 1,
    },
  };
  return (
    <AnimatePresence>
      <div className='mt-10 flex flex-col items-center justify-center gap-5'>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`flex min-h-[100px] w-full cursor-pointer flex-col gap-5 py-2`}
              onClick={() => setIsHovered(!isHovered)}
            >
              <div
                className={`${
                  isHovered ? 'bg-[var(--primary-color)] text-white' : ' bg-white'
                } flex items-center justify-start gap-8 rounded-2xl border border-solid border-black pl-3 md:pl-5`}
              >
                {!isHovered ? <IconBtnPlus /> : <IconBtnMinus />}
                <h1 className='p-3 text-lg font-bold md:p-5 md:text-2xl'>{item.title}</h1>
              </div>
              <motion.div
                className='relative ml-10 mr-2 flex flex-col items-start justify-start rounded-2xl border-2 border-solid bg-[#E6EAEF] p-3 text-black md:ml-20 md:mr-5 md:p-5'
                animate={isHovered ? 'visible' : 'hidden'}
                variants={variants}
              >
                <p className='text-left'>{item.content}</p>
                <IconQuote className='absolute -left-10 -top-5 w-[40px]' />
              </motion.div>
            </div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

export default CollapsibleMotion;
