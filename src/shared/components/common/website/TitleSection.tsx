interface Props {
  title: string;
  description: string;
  className?: string;
  color?: string;
}
const TitleSection = (props: Props) => {
  return (
    <div className={`flex w-full flex-col items-center justify-center gap-3 text-center ${props.className}`}>
      <h1 className={`text-2xl font-bold text-[var(--primary-color)] md:text-3xl lg:text-5xl`}>{props.title}</h1>
      <div className='h-[2px] w-[100px] bg-[var(--primary-color)]'></div>
      <p className='text-base text-[var(--natural-color)] md:text-lg lg:text-2xl'>{props.description}</p>
    </div>
  );
};

export default TitleSection;
