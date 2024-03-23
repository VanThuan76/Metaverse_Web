import React, { SVGProps } from 'react';

export default function IconNext({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='96' height='96' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M36 71.5932C36 75.8888 41.0596 78.1848 44.2924 75.356L69.5352 53.2688C72.7224 50.4796 72.7224 45.5216 69.5352 42.7324L44.2924 20.6453C41.0596 17.8165 36 20.1124 36 24.4082V71.5932Z'
        fill='url(#paint0_linear_16_372)'
      />
      <defs>
        <linearGradient id='paint0_linear_16_372' x1='37.5' y1='20.5' x2='72' y2='77' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#516B94' />
          <stop offset='1' stopColor='#BFC9D9' />
        </linearGradient>
      </defs>
    </svg>
  );
}
