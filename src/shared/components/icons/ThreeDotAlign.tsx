import React, { SVGProps } from 'react';

export default function ThreeDotAlign({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M8.00016 5.16683C7.35583 5.16683 6.8335 4.6445 6.8335 4.00016C6.8335 3.35583 7.35583 2.8335 8.00016 2.8335C8.6445 2.8335 9.16683 3.35583 9.16683 4.00016C9.16683 4.6445 8.6445 5.16683 8.00016 5.16683ZM8.00016 9.16683C7.35583 9.16683 6.8335 8.6445 6.8335 8.00016C6.8335 7.35583 7.35583 6.8335 8.00016 6.8335C8.6445 6.8335 9.16683 7.35583 9.16683 8.00016C9.16683 8.6445 8.6445 9.16683 8.00016 9.16683ZM6.8335 12.0002C6.8335 12.6445 7.35583 13.1668 8.00016 13.1668C8.6445 13.1668 9.16683 12.6445 9.16683 12.0002C9.16683 11.3558 8.6445 10.8335 8.00016 10.8335C7.35583 10.8335 6.8335 11.3558 6.8335 12.0002Z'
        fill='#14130E'
      />
    </svg>
  );
}