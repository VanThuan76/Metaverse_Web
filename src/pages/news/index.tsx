import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useTrans from '@/src/shared/hooks/useTrans';

import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import IconTime from '@/src/shared/components/icons/business/IconTime';
import Error500 from '@/src/pages/500';
import { getListNews } from '@/src/schemas/server/sanity/news';
import { useQuery } from '@tanstack/react-query';
import { urlFor } from '@/src/shared/lib/sanity';
import { INews } from '@/src/schemas/types/news';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import { convertStringDay } from '@/src/shared/utils/functions/convertDay';
import { Badge } from '@/src/shared/components/ui/badge';
import { getListCategory } from '@/src/schemas/server/sanity/category';
import { ICategory } from '@/src/schemas/types/category';
import Pagination from '@/src/shared/components/ui/pagination';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});

function News() {
  const { trans } = useTrans();
  const router = useRouter();
  const [query, setQuery] = useState<string>();
  const [isHover, setIsHover] = useState<INews | undefined>(undefined);
  const { data, refetch, isLoading, isError } = useQuery(['NEWS'], () => getListNews(query));
  const { data: category } = useQuery(['CATEGORY'], getListCategory);
  function handleQuery(value: string) {
    const currentQuery = { ...router.query };
    currentQuery.category = value;
    router.push({
      pathname: '/news',
      query: currentQuery,
    });
    setQuery(`references("${value}")`);
  }
  useEffect(() => {
    refetch();
  }, [query]);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <Error500 />;
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
            description: '',
            image: '/images/banner/news.png',
          }}
          textBtn=''
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='NEWS'>
        <div className='mb-5 flex w-full flex-wrap items-start justify-start gap-2'>
          {trans.common.business.category}:
          {category &&
            category.map((item: ICategory, index: number) => {
              return (
                <Badge key={index} variant='default' className='cursor-pointer' onClick={() => handleQuery(item._id)}>
                  #{item.name}
                </Badge>
              );
            })}
        </div>
        <div className='mb-5 grid w-full grid-cols-1 items-start justify-start gap-8'>
          {data &&
            data.map((item: INews, index: number) => {
              return (
                <div
                  key={index}
                  className={`grid w-full cursor-pointer grid-cols-1 items-start justify-between gap-2 overflow-hidden rounded-lg md:grid-cols-2 md:gap-4 ${
                    isHover === item && 'bg-slate-200'
                  }`}
                  onClick={() => router.push(`/news/${item.slug}`)}
                  onMouseEnter={() => setIsHover(item)}
                  onMouseLeave={() => setIsHover(undefined)}
                >
                  <PreImage
                    src={urlFor(item.title_image).url()}
                    height={300}
                    width={800}
                    layer={false}
                    alt={item.title}
                    className='h-full w-full rounded-lg object-cover object-center'
                  />
                  <div className='flex-col-start h-full w-full gap-2 px-3 md:px-5'>
                    <h1 className='text-lg font-semibold md:text-2xl'>{item.title}</h1>
                    <p className='mt-2 line-clamp-3 text-sm text-gray-600'>{item.description}</p>
                    <div className='mt-5 flex items-start justify-start gap-3 self-end'>
                      <div>
                        <Badge variant='default'>#{item.category.name}</Badge>
                      </div>
                      <div className='flex items-center justify-center gap-1'>
                        <IconTime className='text-base' />
                        <p className='font-normal'>{convertStringDay(item.created_at)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Pagination pageSize={10} totalPage={1} currentPage={1} onChangeFunc={() => {}} />
      </ScrollRevealWrapper>
    </React.Fragment>
  );
}
News.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;

export default News;
