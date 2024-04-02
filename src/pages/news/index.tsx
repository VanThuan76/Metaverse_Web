import Head from 'next/head';
import React, { useState } from 'react';
import useTrans from '@/src/shared/hooks/useTrans';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import { getListNews } from '@/src/schemas/server/sanity/news';
import { useQuery } from '@tanstack/react-query';
import { urlFor } from '@/src/shared/lib/sanity';
import { INews } from '@/src/schemas/types/news';
import { PreImage } from '@/src/shared/components/custom/PreImage';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function News() {
  const { trans } = useTrans();
  const router = useRouter();
  const [isHover, setIsHover] = useState<INews | undefined>(undefined);
  const { data, isLoading, isError } = useQuery(['NEWS'], getListNews);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return (
    <React.Fragment>
      <Head>
        <title>{trans.common.business.news}</title>
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
            title: trans.common.business.news,
            description: trans.common.business.news,
            image: '/images/banner/news.png',
          }}
          textBtn={trans.common.find_more}
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='NEWS'>
        <div className='grid w-full grid-cols-1 items-start justify-start gap-8'>
          {data &&
            data.map((item: INews, index: number) => {
              return (
                <div
                  key={index}
                  className={`grid w-full grid-cols-1 items-start justify-between gap-2 rounded-lg md:grid-cols-2 md:gap-4 ${
                    isHover === item && 'bg-slate-200'
                  }`}
                >
                  <PreImage
                    src={urlFor(item.title_image).url()}
                    height={300}
                    width={800}
                    layer={true}
                    alt={item.title}
                    className='h-full w-full rounded-l-lg object-cover object-bottom'
                  />
                  <div
                    className='flex-col-start h-full w-full cursor-pointer gap-2 px-3 md:px-5'
                    onClick={() => router.push(`/news/${item.slug}`)}
                    onMouseEnter={() => setIsHover(item)}
                    onMouseLeave={() => setIsHover(undefined)}
                  >
                    <h1 className='text-lg font-semibold md:text-2xl'>{item.title}</h1>
                    <p className='mt-2 line-clamp-3 text-sm text-gray-600'>{item.description}</p>
                    {/* <div dangerouslySetInnerHTML={{ __html: htmlDescription }}></div> */}
                    <div className='mt-5 flex items-start justify-start gap-3 self-end'>
                      {/* <div className='flex items-center justify-center gap-1 border-r border-r-slate-300 pr-3'>
                      <IconUser className='text-base' />
                      <p className='font-normal'>{article.author_name}</p>
                    </div> */}
                      {/* <div className='flex items-center justify-center gap-1'>
                      <IconTime className='text-base' />
                      <p className='font-normal'>{convertStringDay(article.created_at)}</p>
                    </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
News.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default News;
