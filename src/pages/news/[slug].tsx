import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/src/shared/lib/sanity';
import { getNewsArticleBySlug } from '@/src/schemas/server/sanity/news';
import { PreImage } from '@/src/shared/components/custom/PreImage';
import { INews } from '@/src/schemas/types/news';
import LayoutWebsite from '@/src/shared/layout/LayoutWebsite';
import Banner from '@/src/shared/components/common/website/banner';
import Image from 'next/image';

const ScrollRevealWrapper = dynamic(() => import('@/src/shared/components/custom/ScrollRevealWrapper'), {
  ssr: false,
});
const NewsArticle = () => {
  const router = useRouter();
  const [data, setData] = useState<INews | null>(null);
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
  if (!data) return <></>;
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
        <div className='prose-md prose-blue md:prose-xl prose-a:text-primary prose-li:marker:text-primary'>
          <PortableText value={data.content} components={myPortableTextComponents} />
        </div>
      </ScrollRevealWrapper>
    </React.Fragment>
  );
};
NewsArticle.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default NewsArticle;
