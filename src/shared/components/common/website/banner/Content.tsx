import { AnimatePresence, motion } from 'framer-motion';
import { Bungee } from 'next/font/google';
import { PropsBanner } from '@/src/shared/components/common/website/banner';
import IconArrowRight from '@/src/shared/components/icons/IconArrowRight';

const bungee = Bungee({ subsets: ['latin-ext'], display: 'swap', weight: ['400'] });
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const Content = ({ data, textBtn, handleClick }: PropsBanner) => {
  const src = data.image;
  return (
    <div
      style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className={`mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-cover px-4 leading-[90%] tracking-wide md:px-32 lg:left-0 lg:items-start lg:px-72`}
    >
      <div className='text-left text-4xl font-bold capitalize md:text-6xl lg:text-8xl'>
        <AnimatePresence mode='wait'>
          <motion.span
            variants={staggerChildren}
            animate='animate'
            className={data.title == 'METAVERSE' ? bungee.className : ''}
          >
            {data.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className='mt-5 text-2xl font-semibold lg:text-5xl' style={{ lineHeight: '62px' }}>
        {data.description}
      </motion.div>
      {textBtn && (
        <div className='mb-4 flex justify-end'>
          <motion.button
            whileHover='hover'
            className={`relative mt-3 flex cursor-pointer items-center justify-between gap-3 rounded-md bg-[#1B3864] px-4 py-4 text-left text-white`}
            onClick={handleClick}
          >
            <p className='text-md'>{textBtn}</p>
            <IconArrowRight color='#fff' />
            <motion.div
              className='absolute left-0 top-0 h-full w-0'
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            ></motion.div>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Content;
