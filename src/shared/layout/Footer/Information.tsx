import Link from 'next/link';

interface Props {
  title: string;
  info: Info[];
}
interface Info {
  title: string;
  link: string;
}

const InformationFooter = ({ title, info }: Props) => {
  return (
    <ul className='flex flex-col items-start justify-end gap-2'>
      <h1 className='mb-2 text-2xl font-medium md:mb-5'>{title}</h1>
      {info.map((item, inx) => (
        <Link href={item.link} key={inx}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default InformationFooter;
