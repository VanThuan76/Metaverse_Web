import React, { useRef, useEffect, FC, CSSProperties } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  style?: CSSProperties;
  title: string;
  children: React.ReactNode;
  revealConfig?: object;
  full?: boolean;
  className?: string;
}

const ScrollRevealWrapper: FC<Props> = ({ children, title, style, revealConfig, full = false, className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
        ...revealConfig,
      });
    }
  }, [revealConfig]);

  return (
    <section
      id={title}
      title={title || ''}
      ref={sectionRef}
      style={style}
      data-testid='section'
      className={`relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden ${
        !full && 'p-4 md:px-28 md:py-10 lg:px-36 lg:py-[80px]'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default ScrollRevealWrapper;
