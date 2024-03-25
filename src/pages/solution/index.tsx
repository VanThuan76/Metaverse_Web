import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import IconCheck from '@/src/shared/components/icons/business/IconCheck';
import ButtonMotion from '@/src/shared/components/common/website/ButtonMotion';
import FormConnect from '@/src/shared/components/common/website/FormConnect';
import { PreImage } from '@/src/shared/components/custom/PreImage';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function Solution() {
  const { trans } = useTrans();
  const router = useRouter();
  const sectionOverviews = [
    {
      ...trans.page.solution.section_business_management,
      title: trans.common.business.business_management,
      image: '/images/section/diamon_sol_1.png',
      slug: 'business-management',
    },
    {
      ...trans.page.solution.section_asset_valuation,
      title: trans.common.business.asset_valuation,
      image: '/images/section/diamon_sol_2.png',
      slug: 'asset-valuation',
    },
    {
      ...trans.page.solution.section_online_education,
      title: trans.common.business.online_education,
      image: '/images/section/diamon_sol_3.png',
      slug: 'online-education',
    },
    {
      ...trans.page.solution.section_application_entertainment,
      title: trans.common.business.application_entertainment,
      image: '/images/section/diamon_sol_4.png',
      slug: 'application-entertainment',
    },
  ];
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.business.title}</title>
        <meta name='description' content={trans.common.business.title} />
        <meta name='keywords' content={trans.common.business.title} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper title='BANNER' full={true} className='relative'>
        <Banner
          data={{
            title: trans.common.business.solution,
            description: trans.page.solution.section_banner.description,
            image: '/images/banner/solution.png',
          }}
          textBtn={trans.common.find_more}
        />
        <div className='absolute bottom-10 hidden w-[80%] items-center justify-center overflow-hidden rounded-full bg-[var(--default-color)] md:flex'>
          {sectionOverviews.map(item => {
            return (
              <Link
                key={item.slug}
                to={item.title}
                smooth={true}
                duration={300}
                spy={true}
                offset={-100}
                className='flex w-full cursor-pointer items-center justify-center rounded-full hover:bg-[var(--primary-color)] hover:text-white'
              >
                <div className='p-3 lg:p-5'>{item.title}</div>
              </Link>
            );
          })}
        </div>
      </ScrollRevealWrapper>
      {sectionOverviews.map((item, idx) => (
        <ScrollRevealWrapper
          key={idx}
          title={item.title}
          className={`${idx % 2 === 0 ? 'bg-[var(--default-color)]' : ''}`}
        >
          <div className='grid grid-cols-1 items-center justify-between lg:grid-cols-2'>
            {idx % 2 !== 0 && (
              <div className='hidden items-center justify-center p-5 lg:flex lg:p-10'>
                <PreImage
                  className='object-cover'
                  height={500}
                  width={500}
                  src={item.image}
                  alt={item.title}
                ></PreImage>
              </div>
            )}
            <div className='flex flex-col gap-10 p-5 md:p-10'>
              <h1 className='text-2xl font-semibold text-[var(--primary-color)] md:text-3xl lg:text-5xl'>
                {item.title}
              </h1>
              <h2 className='text-base md:text-lg lg:text-xl'>{item.description}</h2>
              <ul>
                {item.child_section.map((detail, index) => (
                  <li key={index} className='flex items-center gap-2 text-sm md:text-lg'>
                    <IconCheck className='w-[12px] md:w-[24px]' />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap items-center gap-5'>
                <ButtonMotion text={trans.form.title} icon={false} />
                <ButtonMotion
                  text={trans.common.business.success_project}
                  className='bg-white !text-[var(--primary-color)]'
                  color='var(--primary-color)'
                  onClick={() => router.push(router.pathname + '/' + item.slug)}
                />
              </div>
            </div>
            {idx % 2 === 0 && (
              <div className='hidden place-content-end p-5 lg:grid lg:p-10'>
                <PreImage className='object-cover' height={500} src={item.image} alt={item.title}></PreImage>
              </div>
            )}
          </div>
        </ScrollRevealWrapper>
      ))}
      <ScrollRevealWrapper title='FORM_CONNECT'>
        <FormConnect />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Solution.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default Solution;
