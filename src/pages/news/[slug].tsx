import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { PortableText } from 'next-sanity';

import { urlFor } from '@/src/shared/lib/sanity';
import { getListNews, getNewsArticleBySlug } from '@/src/schemas/server/sanity/news';
import { INews } from '@/src/schemas/types/news';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import { convertStringDay } from '@/src/shared/utils/functions/convertDay';
import { Badge } from '@/src/shared/components/ui/badge';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import Image from 'next/image';
import useTrans from '@/src/shared/hooks/useTrans';
import useBreakPoint from '@/src/shared/hooks/useBreakPoint';
import IconTime from '@/src/shared/components/icons/business/IconTime';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});
const NewsArticle = () => {
  const router = useRouter();
  const { trans } = useTrans();
  const currentBreakpoint = useBreakPoint();
  const [data, setData] = useState<INews | null>(null);
  const [isHover, setIsHover] = useState<any>(undefined);
  const { data: latestNews } = useQuery(['LATESTNEWS'], () => getListNews());

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        const fetchedData = await getNewsArticleBySlug(router.query.slug as string);
        setData(fetchedData);
      }
    };
    fetchData();
  }, [router.query.slug]);
  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => <Image src={urlFor(value).url()} height={300} width={800} alt={data?.title || ''} />,
    },
  };
  if (!data || !latestNews) return <></>;
  return (
    <React.Fragment>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.description} />
        <meta name='keywords' content={data.description} />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/logo.svg' />
        <link rel='apple-touch-icon' href='/logo.svg' />
      </Head>
      <ScrollRevealWrapper title='BANNER' full={true}>
        <Banner
          data={{
            title: data.title,
            description: '',
            image: urlFor(data.title_image).url(),
          }}
          styleList='news'
        />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper title='ARTICLE'>
        <div className='grid h-full w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-7'>
          <div className='prose-md prose-blue md:prose-xl prose-a:text-primary prose-li:marker:text-primary md:col-span-4'>
            <PortableText value={data.content} components={myPortableTextComponents} />
          </div>
          <div className='flex min-h-[500px] w-full flex-col items-start justify-start gap-8 md:col-span-3'>
            <h1 className='text-base font-semibold md:text-xl'>{trans.common.business.titleLastNews}</h1>
            <div className='grid h-full w-full grid-cols-1 items-start justify-start gap-8'>
              {latestNews
                .filter((item: INews) => item.slug !== router.query.slug)
                .map((article: INews, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className={`grid h-full w-full cursor-pointer grid-cols-1 items-start justify-start gap-4 rounded-lg md:grid-cols-2 ${
                        isHover === article && 'bg-slate-200'
                      }`}
                      onClick={() => router.push(`/news/${article.slug}`)}
                      onMouseEnter={() => setIsHover(article)}
                      onMouseLeave={() => setIsHover(undefined)}
                    >
                      <PreImage
                        src={urlFor(article.title_image).url()}
                        height={190}
                        width={currentBreakpoint === 'md' || currentBreakpoint === 'sm' ? 1980 : 400}
                        layer={false}
                        alt={article.title}
                        className='max-h-[190px] w-full rounded-lg object-cover object-bottom'
                      />
                      <div className='flex h-full w-full flex-col items-start justify-start gap-2 pb-5'>
                        <h1 className='text-base font-medium'>{article.title}</h1>
                        <div className='mt-5 flex w-full flex-wrap items-center justify-start gap-3'>
                          <div>
                            <Badge variant='default'>#{article.category.name}</Badge>
                          </div>
                          <div className='flex items-center justify-center gap-1'>
                            <IconTime className='text-xs' />
                            <p className='text-xs font-normal'>{convertStringDay(article.created_at)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};
NewsArticle.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default NewsArticle;
