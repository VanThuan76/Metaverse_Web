import useTrans from '@/src/shared/hooks/useTrans';
import InformationFooter from './Information';
import TextLogo from '@/src/shared/components/common/website/TextLogo';
import { useRouter } from 'next/router';
import { Mail, MapPin, Phone } from 'lucide-react';

const FooterLayoutWebsite = () => {
  const { trans } = useTrans();
  const router = useRouter();
  return (
    <section className='w-full bg-[var(--primary-color)] font-thin text-white'>
      <div className='container-layer flex-col-between-center gap-10 p-4 py-4 md:py-6 lg:py-12'>
        <div className='mb-4 grid w-full grid-cols-1 items-start justify-start lg:grid-cols-5'>
          <div className='col-span-1 md:col-span-2'>
            <TextLogo onClick={() => router.push('/')} className='!text-lg md:!text-2xl lg:!text-4xl' />
            <div className='mt-5 flex flex-col items-start justify-start gap-4'>
              {[
                { title: trans.common.business.address, icon: <MapPin /> },
                { title: trans.common.business.phone_number, icon: <Phone /> },
                { title: trans.common.business.email, icon: <Mail /> },
              ].map((item, idx) => (
                <p key={idx} className='flex items-center justify-start gap-2'>
                  {item.icon}
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <div className='col-span-1 mt-5 grid w-full grid-cols-1 items-start justify-start gap-5 md:col-span-3 md:grid-cols-3 lg:mt-0'>
            <div className='flex-col-start gap-5'>
              <InformationFooter
                title={trans.common.business.solution}
                info={[
                  { title: trans.common.business.business_management, link: '' },
                  { title: trans.common.business.asset_valuation, link: '' },
                  { title: trans.common.business.online_education, link: '' },
                  { title: trans.common.business.application_entertainment, link: '' },
                ]}
              />
            </div>
            <div className='flex-col-start gap-5'>
              <InformationFooter
                title={trans.common.business.about_us}
                info={[
                  { title: trans.common.business.about_us, link: '' },
                  { title: trans.common.business.news, link: '' },
                  { title: trans.common.business.asset_valuation, link: '' },
                  { title: trans.common.business.application_entertainment, link: '' },
                ]}
              />
            </div>
            <div className='flex-col-start gap-5'>
              <InformationFooter
                title={trans.common.support}
                info={[
                  { title: 'FAQ', link: '' },
                  { title: trans.common.connect, link: '' },
                  { title: trans.common.terms_of_use, link: '' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-end border-t-2 pt-5'>
          <p>
            {new Date().getFullYear()} © {trans.common.copyright}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterLayoutWebsite;
