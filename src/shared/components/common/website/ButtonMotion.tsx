import { motion } from 'framer-motion';
import IconArrowRight from '@/src/shared/components/icons/IconArrowRight';

interface ButtonProps {
  text: string;
  isMount?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  color?: string;
  icon?: boolean;
}

const buttonVariants = {
  hidden: { opacity: 0 },
  hover: { opacity: 1 },
};
const ButtonMotion = (props: ButtonProps) => {
  const { isMount = true, type = 'button', text, onClick, className, color = '#fff', icon = true } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      type={type}
      variants={buttonVariants}
      initial='hidden'
      animate={isMount ? 'hover' : 'hidden'}
      className={`relative mt-3 flex cursor-pointer flex-wrap items-center justify-between gap-3 rounded-md bg-[var(--primary-color)] p-2 text-left text-white md:p-4 ${className}`}
      onClick={onClick}
    >
      <motion.p className='text-sm md:text-base'>{text}</motion.p>
      {icon && <IconArrowRight color={color} className='self-end' />}
    </motion.button>
  );
};

export default ButtonMotion;
