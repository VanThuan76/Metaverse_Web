import React, { SVGProps } from 'react';

export default function IconBtnMinus({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M6.66683 17.3333H25.3335C26.0699 17.3333 26.6668 16.7363 26.6668 15.9999C26.6668 15.2635 26.0699 14.6666 25.3335 14.6666L6.66683 14.6666C5.93046 14.6666 5.3335 15.2635 5.3335 15.9999C5.3335 16.7363 5.93046 17.3333 6.66683 17.3333Z'
        fill='white'
      />
    </svg>
  );
}
