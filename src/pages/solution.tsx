import Head from 'next/head';
import React from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function Solution() {
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
            title: trans.common.business.solution,
            description: trans.page.solution.section_banner.description,
            image: '/images/banner/solution_1.png',
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='BANNER' full={true}>
        <Banner
          data={{
            title: trans.common.business.solution,
            description: trans.page.solution.section_banner.description,
            image: '/images/banner/solution_1.png',
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
Solution.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default Solution;
