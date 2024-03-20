import { Roboto } from 'next/font/google';
import { QueryClient } from '@tanstack/react-query';
export const nextFont = Roboto({
  subsets: ['vietnamese'],
  display: 'swap',
  weight: ['400', '500', '700', '300', '900'],
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});
/**
 *  @must add to screen in tailwind.config.ts when use breakpoint
 * */
export const breakpoints = {
  sm: 375,
  md: 745,
  lg: 1024,
  xl: 1980,
};
export const MENULAYOUT: 'horizontal' | 'vertical' = 'vertical';
