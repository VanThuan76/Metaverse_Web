interface Props {
  title: string;
  description: string;
  className?: string;
  color?: string;
}
const TitleSection = (props: Props) => {
  return (
    <div className={`flex w-full flex-col items-center justify-center gap-3 text-center ${props.className}`}>
      <p className={`${props.color ? `text-${props.color}` : 'text-var(--primary-color)'} text-4xl font-bold`}>
        {props.title}
      </p>
      <div className='h-1 w-28 bg-[var(--primary-color)]'></div>
      <h1 className='text-2xl'>{props.description}</h1>
    </div>
  );
};

export default TitleSection;
