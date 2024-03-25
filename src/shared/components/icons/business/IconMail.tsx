import React, { SVGProps } from 'react';

export default function IconMail({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg width='68' height='54' viewBox='0 0 68 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M67.3327 15.6934V42.8334C67.3327 48.61 62.811 53.3307 57.114 53.6497L56.4994 53.6667H11.4993C5.72258 53.6667 1.00185 49.145 0.683149 43.448L0.666016 42.8334V15.6934L32.8394 32.548C33.566 32.9284 34.4327 32.9284 35.1593 32.548L67.3327 15.6934ZM11.4993 0.333374H56.4994C62.115 0.333374 66.733 4.60641 67.2787 10.0785L33.9994 27.511L0.719982 10.0785C1.24555 4.80907 5.54708 0.651541 10.8796 0.350807L11.4993 0.333374Z'
        fill='url(#paint0_linear_789_148)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_789_148'
          x1='0.927047'
          y1='0.600074'
          x2='48.7751'
          y2='67.0617'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#516B94' />
          <stop offset='1' stopColor='#BFC9D9' />
        </linearGradient>
      </defs>
    </svg>
  );
}
