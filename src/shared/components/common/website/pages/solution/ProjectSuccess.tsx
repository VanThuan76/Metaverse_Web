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
    <div className='flex w-full flex-col items-center justify-center'>
      <TitleSection title={trans.common.business.success_project} description={trans.common.business.typical_project} />
      {props.section_project.map((item, idx) => (
        <div key={idx} className='w-full mt-5 md:mt-10 grid grid-cols-1 lg:grid-cols-2 items-start justify-start gap-5'>
          <div className='relative md:flex items-center justify-center hidden'>
            <div className='z-30 overflow-hidden rounded-lg shadow-md'>
              <PreImage className='object-cover object-top' height={425} width={425} src={item.image} alt={item.title}></PreImage>
            </div>
            <BackgroundProjectSolution className='absolute left-5 -top-5 z-10' />
          </div>
          <div className='w-full flex flex-col gap-3'>
            <h1 className='text-xl md:text-2xl lg:text-4xl text-[var(--primary-color)]'>{item.title}</h1>
            <p className='text-sm md:text-base lg:text-xl'>{item.description}</p>
          </div>
          <div className='relative md:hidden flex items-start justify-start'>
            <div className='z-30 rounded-lg shadow-md'>
              <PreImage className='object-cover object-top' height={212} width={212} src={item.image} alt={item.title}></PreImage>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSuccess;
