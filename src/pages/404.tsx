import Image from 'next/image';
import Link from 'next/link';
import useTrans from '@/src/shared/hooks/useTrans';

const Img404 = '/404.png';

export default function Page404() {
  const { trans } = useTrans();
  return (
    <section className='lg:pt-50 xl:pt-55 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden pt-48'>
      <div className='animate_top mx-auto max-w-[518px] text-center'>
        <Image src={Img404} alt='404' className='mb-7.5 mx-auto' width={396} height={156} />

        <h2 className='mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl'>{trans.notFound.title}</h2>
        <p className='mb-7.5'>{trans.notFound.description}</p>

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
