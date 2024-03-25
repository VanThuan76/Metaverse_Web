import React, { SVGProps } from 'react';

export default function IconLocation({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M60.5223 56.2729L56.5657 60.1859C53.6493 63.0479 49.8657 66.728 45.2127 71.2263C42.3053 74.0376 37.6927 74.0373 34.7857 71.2256L23.1485 59.9059C21.686 58.4699 20.4618 57.2589 19.4756 56.2729C8.14093 44.9383 8.14093 26.5609 19.4756 15.2262C30.8103 3.89154 49.1877 3.89154 60.5223 15.2262C71.857 26.5609 71.857 44.9383 60.5223 56.2729ZM48.333 36.6653C48.333 32.0624 44.6017 28.3312 39.999 28.3312C35.3963 28.3312 31.6649 32.0624 31.6649 36.6653C31.6649 41.2679 35.3963 44.9993 39.999 44.9993C44.6017 44.9993 48.333 41.2679 48.333 36.6653Z'
        fill='url(#paint0_linear_125_1657)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_125_1657'
          x1='11.2019'
          y1='7.05831'
          x2='74.1834'
          y2='68.0494'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#516B94' />
          <stop offset='1' stopColor='#BFC9D9' />
        </linearGradient>
      </defs>
    </svg>
  );
}
