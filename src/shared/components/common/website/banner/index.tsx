import { AnimatePresence, motion } from 'framer-motion';
import ButtonMotion from '@/src/shared/components/common/website/ButtonMotion';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import TextLogo from '@/src/shared/components/common/website/TextLogo';

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
export interface PropsBanner {
  data: { title: string; description: string; image: string };
  textBtn: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Banner = (props: PropsBanner) => {
  const { data, textBtn, handleClick } = props;
  return (
    <div className='relative flex min-h-[700px] w-full items-center justify-between'>
      <div
        className={`mx-auto flex h-full w-full flex-col items-start justify-start gap-5 p-4 tracking-wide text-white md:px-28 lg:px-36`}
      >
        <AnimatePresence mode='wait'>
          <TextLogo title={data.title} />
        </AnimatePresence>
        <motion.div className='mt-2 text-2xl font-semibold leading-10 md:mt-3 md:text-3xl md:leading-[50px] lg:mt-5 lg:text-5xl lg:leading-[60px]'>
          {data.description}
        </motion.div>
        <ButtonMotion text={textBtn} isMount={textBtn !== undefined} onClick={handleClick} />
      </div>
      <div className='absolute left-0 top-0 -z-10 h-full w-full'>
        <PreImage
          src={data.image as string}
          width={1980}
          height={700}
          layer={false}
          alt={data.title}
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Banner;
