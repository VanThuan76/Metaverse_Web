import TitleSection from '@/src/shared/components/common/website/TitleSection';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import BackgroundProjectSolution from '@/src/shared/components/icons/business/BackgroundProjectSolution';
import useTrans from '@/src/shared/hooks/useTrans';
interface Props {
  section_project: {
    description: string;
    title: string;
    image: string;
  }[];
}
const ProjectSuccess = (props: Props) => {
  const { trans } = useTrans();
  return (
    <div className='flex w-full flex-col items-center justify-center px-6'>
      <TitleSection title={trans.common.business.success_project} description={trans.common.business.typical_project} />
      <div className='flex w-full flex-col items-center justify-center gap-4 md:gap-8 lg:gap-16'>
        {props.section_project.map((item, idx) => (
          <div
            key={idx}
            className='mt-5 grid w-full grid-cols-1 items-center justify-center gap-5 md:mt-10 md:items-start md:justify-start lg:grid-cols-2'
          >
            <div className='relative hidden items-center justify-center md:flex'>
              <div className='absolute -top-10 left-5 z-30 overflow-hidden rounded-lg shadow-lg md:left-24'>
                <PreImage
                  className='rounded-lg object-cover object-top'
                  height={425}
                  width={425}
                  src={item.image}
                  alt={item.title}
                ></PreImage>
              </div>
              <BackgroundProjectSolution className='z-10' />
            </div>
            <div className='flex w-full flex-col gap-3'>
              <h1 className='text-xl text-[var(--primary-color)] md:text-2xl lg:text-4xl'>{item.title}</h1>
              <p className='text-sm md:text-base lg:text-xl'>{item.description}</p>
            </div>
            <div className='relative flex items-start justify-start md:hidden'>
              <div className='z-30 overflow-hidden rounded-lg shadow-lg'>
                <PreImage
                  className='object-cover object-top'
                  height={212}
                  width={212}
                  src={item.image}
                  alt={item.title}
                ></PreImage>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSuccess;
