import Link from 'next/link';
import useTrans from '@/src/shared/hooks/useTrans';

const FooterLayoutWebsite = () => {
  const { trans } = useTrans();
  return (
    <section className='md:padding-section bg-[var(--main-color)] font-thin text-white'>
      <div className='container-layer flex-col-between-center gap-10 p-4 md:p-6 lg:p-12'>
        <div className='mb-4 grid w-full grid-cols-1 items-center justify-center lg:grid-cols-5'>
          <div className='flex-col-start col-span-2 gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <Link href={trans.common.business.title} target='_blank'></Link>
              <Link href={trans.common.business.title} target='_blank'></Link>
            </div>
          </div>
          <div className='col-span-3 mt-5 grid w-full grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:mt-0'>
            <div className='flex-col-start gap-5'>
              <h2 className='font-bold'>{trans.common.business.title}</h2>
              <p>{trans.common.business.title}</p>
              <p>{trans.common.business.title}</p>
              <p>{trans.common.business.title}</p>
            </div>
            <div className='flex-col-start gap-5'>
              <h2 className='font-bold'>{trans.common.business.title}</h2>
              <div className='flex-row-between-center gap-2'>
                <p>{trans.common.business.title}</p>
              </div>
              <div className='flex-row-between-center gap-2'>
                <p>{trans.common.business.title}</p>
              </div>
              <div className='flex-row-between-center gap-2'>
                <p>{trans.common.business.title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-col-end w-full border-t-2 py-5 md:flex-row'>{/* <p>{trans.footer.copyright}</p> */}</div>
      </div>
    </section>
  );
};

export default FooterLayoutWebsite;
