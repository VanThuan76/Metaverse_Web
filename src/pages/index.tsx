import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import TitleSection from '@/src/shared/components/common/website/TitleSection';
import SolutionCard from '@/src/shared/components/common/website/card/solution';
import { iconSolutionChildSection, logoPartner } from '@/src/shared/constants/business';
import { PreImage } from '@/src/shared/components/custom/PreImage';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function Home() {
  const { trans } = useTrans();
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
      <ScrollRevealWrapper title='BANNER' full={true}>
        <Banner
          data={{
            title: trans.common.business.title,
            description: trans.page.home.section_banner.description,
            image: '/images/banner/home.png',
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='SOLUTION'>
        <TitleSection
          title={trans.common.business.solution}
          description={trans.page.home.section_solution.description}
        />
        <div className='mt-10 grid min-h-[250px] w-full grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 lg:grid-cols-4'>
          {trans.page.home.section_solution.child_section.map((item, idx) => {
            return <SolutionCard key={idx} title={item} icon={iconSolutionChildSection[idx]} link='/' />;
          })}
        </div>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='TESTIMONIAL'>
        <TitleSection
          title={trans.common.business.customer}
          description={trans.page.home.section_customer.description}
        />
        <div className='mt-10 hidden w-full items-start justify-between md:flex'>
          <Swiper
            className='mySwiper'
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop
          >
            {logoPartner.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className={`relative cursor-pointer`}>
                  <PreImage
                    width={232}
                    height={100}
                    src={item as string}
                    layer={false}
                    alt={item}
                    className='object-contain'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default Home;
