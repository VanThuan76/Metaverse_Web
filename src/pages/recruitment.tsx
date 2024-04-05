import Link from 'next/link';
import useTrans from '@/src/shared/hooks/useTrans';

export default function Recruitment() {
  const { trans } = useTrans();
  return (
    <section className='relative h-screen w-full bg-[url("/images/banner/comming_soon.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='animate_top absolute left-1/2 top-[10%] mx-auto max-w-[518px] -translate-x-1/2 text-center'>
        <button className=' dark:bg-btndark hover:bg-blackho mt-4 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out'>
          <Link href={'/'} className='inline-flex items-center gap-2.5'>
            {trans.notFound.hint}
            <svg
              className='fill-white'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z'
                fill=''
              />
            </svg>
          </Link>
        </button>
      </div>
    </section>
  );
}
