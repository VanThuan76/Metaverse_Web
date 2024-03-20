import Content from '@/src/shared/components/common/website/banner/Content';

export interface PropsBanner {
  data: { title: string; description: string; image: string };
  textBtn: string;
  handleClick?: () => void;
}
const Banner = (props: PropsBanner) => {
  return (
    <div className='snap-x-mandatory scrollbar-none relative bottom-24 flex w-full overflow-hidden rounded-lg text-white'>
      <div className='mx-auto flex w-full items-center justify-between'>
        <Content data={props.data} textBtn={props.textBtn} handleClick={props.handleClick} />
      </div>
    </div>
  );
};

export default Banner;
