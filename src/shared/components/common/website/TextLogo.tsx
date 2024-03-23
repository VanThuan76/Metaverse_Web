import useTrans from '@/src/shared/hooks/useTrans';
import { motion } from 'framer-motion';
import { Bungee } from 'next/font/google';
const bungee = Bungee({ subsets: ['latin-ext'], display: 'swap', weight: ['400'] });
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
interface Props {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const TextLogo = (props: Props) => {
  const { trans } = useTrans();
  return (
    <motion.span
      variants={staggerChildren}
      animate='animate'
      className={`text-left font-bold capitalize ${bungee.className} ${props.className}`}
      onClick={props.onClick}
    >
      {props.title ? props.title : trans.common.business.title}
    </motion.span>
  );
};

export default TextLogo;
