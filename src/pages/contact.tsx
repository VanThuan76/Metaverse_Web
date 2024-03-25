import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import FormConnect from '@/src/shared/components/common/website/FormConnect';
import TitleSection from '@/src/shared/components/common/website/TitleSection';
import IconContactInfo from '@/src/shared/components/icons/business/IconContactInfo';
import IconPhone from '@/src/shared/components/icons/business/IconPhone';
import IconMail from '@/src/shared/components/icons/business/IconMail';
import IconLocation from '@/src/shared/components/icons/business/IconLocation';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function Contact() {
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
      <ScrollRevealWrapper title='BANNER' full={true} className='relative'>
        <Banner
          data={{
            title: trans.common.business.contact,
            description: trans.page.contact.section_banner.description,
            image: '/images/banner/contact.png',
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='INFORMATION'>
        <TitleSection
          title={trans.common.business.contact_info}
          description={trans.page.contact.section_information.description}
        />
        <div className='mt-10 grid w-full grid-cols-1 items-center justify-center md:w-[80%] md:grid-cols-2'>
          <IconContactInfo className='hidden items-end justify-end md:flex' />
          <div className='flex flex-col items-start justify-start gap-8'>
            {trans.page.contact.section_information.child_section.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='flex w-full items-center justify-start gap-9 rounded-lg border border-[var(--primary-color)] p-3 md:p-5'
                >
                  {idx === 0 ? (
                    <IconPhone className='w-[50px]' />
                  ) : idx === 1 ? (
                    <IconMail className='w-[50px]' />
                  ) : (
                    <IconLocation className='w-[50px]' />
                  )}
                  <div className='flex flex-col items-start justify-start gap-2'>
                    <p className='font-bold'>{item.title}</p>
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='FORM_CONNECT'>
        <FormConnect />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Contact.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default Contact;
