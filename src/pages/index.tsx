import Head from 'next/head';
import React, { useState } from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import TitleSection from '@/src/shared/components/common/website/TitleSection';
import SolutionCard from '@/src/shared/components/common/website/card/solution';
import { iconSolutionChildSection, logoPartner } from '@/src/shared/constants/business';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import { Carousel, CarouselContent, CarouselItem } from '@/src/shared/components/ui/carousel';
import IconNext from '@/src/shared/components/icons/business/IconNext';
import IconQuote from '@/src/shared/components/icons/business/IconQuote';
import convertStringWithSpace from '@/src/shared/utils/functions/convertString';
import FormConnect from '@/src/shared/components/common/website/FormConnect';
import CollapsibleMotion from '../shared/components/common/website/CollapsibleMotion';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function Home() {
  const { trans } = useTrans();
  const [contentAboutUs, setContentAboutUs] = useState<{ title: string; content: string }>(
    trans.page.home.section_about_us.child_section[0],
  );
  const findIndexContentAboutUs = trans.page.home.section_about_us.child_section.findIndex(
    item => item.title === contentAboutUs.title && item.content === contentAboutUs.content,
  );
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
            return (
              <SolutionCard
                key={idx}
                title={item}
                icon={iconSolutionChildSection[idx]}
                link={
                  idx === 0
                    ? 'business-management'
                    : idx === 1
                      ? 'asset-valuation'
                      : idx === 2
                        ? 'online-education'
                        : 'application-entertainment'
                }
              />
            );
          })}
        </div>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='ABOUT_US'>
        <div className='flex w-full flex-col items-center justify-center gap-16'>
          <div className='flex flex-col gap-4'>
            <TitleSection title={trans.common.business.about_us} description='' />
            <div className='relative mx-auto mb-16 hidden w-full flex-col items-center justify-center gap-10 md:flex md:flex-row'>
              {trans.page.home.section_about_us.child_section.map((item, index) => (
                <motion.button
                  key={index}
                  type='button'
                  transition={{ duration: 0.5 }}
                  className={`${
                    item === contentAboutUs
                      ? 'duration-750 bg-[var(--primary-color)] text-white transition ease-in-out'
                      : 'bg-white'
                  } relative flex w-48 cursor-pointer items-center justify-center rounded-full border border-[#000] px-4 py-4 text-left text-black`}
                  onClick={() => setContentAboutUs(item)}
                >
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center text-2xl'
                  >{`${item.title}`}</motion.p>
                </motion.button>
              ))}
              <div className='absolute z-[-10] hidden w-2/3 border border-[var(--primary-color)] md:block'></div>
            </div>
          </div>
          <Carousel className='relative w-full'>
            <CarouselContent>
              {trans.page.home.section_about_us.child_section.map((item, index) => (
                <CarouselItem key={index} className='flex w-full items-center justify-center'>
                  <div className='relative min-h-[250px] w-full rounded-xl bg-slate-200 p-8 text-center text-lg md:text-xl lg:text-2xl'>
                    {contentAboutUs?.content}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <IconQuote className='absolute -top-10 left-5 md:left-20' />
            <IconNext
              onClick={() =>
                setContentAboutUs(
                  trans.page.home.section_about_us.child_section[
                    findIndexContentAboutUs + 1 === trans.page.home.section_about_us.child_section.length
                      ? 0
                      : findIndexContentAboutUs + 1
                  ],
                )
              }
              className='cursor-poiter absolute -right-20 bottom-1/2 top-1/3 hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 md:block'
            />
          </Carousel>
          <div className='grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-4 md:gap-10'>
            {trans.page.home.section_about_us.description.map((item, index) => {
              return (
                <div
                  key={index}
                  className='border-card-aboutUs flex flex-col items-center justify-start pr-6 text-center'
                >
                  <p className='text-5xl text-[var(--primary-color)]'>{convertStringWithSpace(item)[1]}</p>
                  <h1 className='py-3 text-2xl'>{convertStringWithSpace(item)[2]}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='TESTIMONIAL'>
        <TitleSection
          title={trans.common.business.customer}
          description={trans.page.home.section_customer.description}
        />
        <div className='mt-10 flex w-full items-start justify-between'>
          <Swiper
            className='mySwiper'
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              745: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop
            pagination={true}
          >
            {logoPartner.map((item, idx) => (
              <SwiperSlide key={idx} className='!ml-5'>
                <div className={`relative mb-5 cursor-pointer`}>
                  <PreImage
                    width={300}
                    height={150}
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
      <ScrollRevealWrapper title='FORM_CONNECT'>
        <FormConnect />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='TAKE_CARE' className='bg-care-fade'>
        <TitleSection title={trans.common.business.care} description={trans.page.home.section_care.description} />
        <div className='w-full items-start justify-center'>
          <CollapsibleMotion data={trans.page.home.section_care.child_section} />
        </div>
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default Home;
