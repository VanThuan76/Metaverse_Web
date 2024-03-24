import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import FormConnect from '@/src/shared/components/common/website/FormConnect';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function SolutionDetail() {
  const { trans } = useTrans();
  const router = useRouter();
  const { slug } = router.query;
  const convertSlug = String(slug).replace('-', '_') as keyof typeof trans.page;
  const convertSlugMap: { [key: string]: string } = {
    business_management: 'solution_business_management',
    asset_valuation: 'solution_asset_valuation',
    online_education: 'solution_online_education',
    application_entertainment: 'solution_application_entertainment',
  };
  const pageSlug =
    convertSlugMap[convertSlug] === 'solution_application_entertainment'
      ? 'solution_application_entertainment'
      : convertSlugMap[convertSlug] === 'solution_asset_valuation'
        ? 'solution_asset_valuation'
        : convertSlugMap[convertSlug] === 'solution_online_education'
          ? 'solution_online_education'
          : 'solution_application_entertainment';
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
            title: trans.common.business.solution,
            description: trans.page[pageSlug].section_information.description,
            image: `/images/banner/${convertSlugMap[convertSlug]}.png`,
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='FORM_CONNECT'>
        <FormConnect />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
SolutionDetail.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default SolutionDetail;
