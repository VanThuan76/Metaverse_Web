import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

interface Props extends ImageProps {
  layer?: boolean;
}

export function PreImage({ src, layer, ...rest }: Props) {
  const { theme } = useTheme();
  const backgroundLayer = theme !== 'light' ? 'bg-white' : 'bg-black';

  return (
    <React.Fragment>
      <div className='relative h-full w-full overflow-hidden'>
        <Image
          src={src as string}
          width={1200}
          style={{ width: `${rest.width}px`, height: `${rest.height}px` }}
          {...rest}
        />
        {layer && (
          <div
            style={rest.style}
            className={`${rest.className} ${backgroundLayer} absolute left-0 top-0 h-full w-full opacity-50 blur-lg`}
          ></div>
        )}
      </div>
    </React.Fragment>
  );
}
