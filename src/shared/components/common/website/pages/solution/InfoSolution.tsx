import useTrans from '@/src/shared/hooks/useTrans';
import React from 'react';
import TitleSection from '@/src/shared/components/common/website/TitleSection';

interface Props {
  description: string;
  child_section: {
    title: string;
    content: string;
  }[];
}

const InfoSolution = (props: Props) => {
  const { trans } = useTrans();
  return (
    <div className='grid grid-cols-1 items-start justify-start gap-4 md:gap-8 lg:grid-cols-2'>
      <TitleSection
        title={trans.common.business.why_choose_us}
        description={props.description}
        className='!items-start !justify-start'
      />
      <div className='flex flex-col items-start justify-start gap-2'>
        {props.child_section.map((item, idx) => (
          <div key={idx} className='flex flex-col gap-3'>
            <h2 className='text-lg md:text-xl lg:text-3xl'>{item.title}</h2>
            <p className='text-sm md:text-base lg:text-xl'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSolution;
