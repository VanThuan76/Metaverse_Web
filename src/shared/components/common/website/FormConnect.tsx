import React, { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import ButtonMotion from '@/src/shared/components/common/website/ButtonMotion';
import useTrans from '@/src/shared/hooks/useTrans';
import { ConfirmDialog } from '@/src/shared/components/custom/ConfirmDialog';
import { Form } from '@/src/shared/components/ui/form';
import InputText from '@/src/shared/components/custom/form/InputText';
import InputNumber from '@/src/shared/components/custom/form/InputNumber';

const FormConnect = () => {
  const { trans } = useTrans();
  const formSchema = z.object({
    username: z.string({ required_error: trans.form.body[0].placeholder }),
    phone: z.number({ required_error: trans.form.body[1].placeholder }),
    email: z.string().min(1, { message: trans.form.body[2].placeholder }).email('This is not a valid email.'),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-[var(--primary-color)] p-5 md:p-10'>
      <div className='mb-5 flex w-full flex-col items-center justify-center gap-3 text-center'>
        <h1 className='text-2xl font-bold text-white md:text-3xl lg:text-5xl'>{trans.form.title}</h1>
        <div className='h-[2px] w-[100px] bg-white'></div>
      </div>
      <div className='grid grid-cols-1 items-start justify-between gap-12 text-white md:grid-cols-3 md:gap-24'>
        <div className='hidden flex-col justify-center text-center md:col-span-1 md:block'>
          <p className='text-xl leading-7'>{trans.form.description}</p>
          <Image
            className='mx-auto py-10'
            height={400}
            width={400}
            src={'/images/section/background_form.png'}
            alt='Form Connect'
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='px-0 md:col-span-2 md:px-12'>
            <div className='flex flex-col gap-8'>
              <InputText
                form={form}
                fieldName='username'
                label={trans.form.body[0].field}
                placeHolder={trans.form.body[0].placeholder}
                className='mb-4 h-[55px] bg-[var(--primary-color)]'
              />
              <InputNumber
                form={form}
                fieldName='phone'
                label={trans.form.body[1].field}
                placeHolder={trans.form.body[1].placeholder}
                className='mb-4 h-[55px] bg-[var(--primary-color)]'
              />
              <InputText
                form={form}
                fieldName='email'
                label={trans.form.body[2].field}
                placeHolder={trans.form.body[2].placeholder}
                className='mb-4 h-[55px] bg-[var(--primary-color)]'
              />
              <div className='mb-4'>
                <label className='block text-lg font-bold'>{trans.form.choose_tile}</label>
                <div className='flex flex-wrap gap-3 py-5'>
                  {trans.form.options.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        item == selectedIcon && 'duration-750 bg-white text-black transition ease-in-out'
                      } cursor-pointer items-center justify-between rounded-full border border-white p-3`}
                      onClick={() => setSelectedIcon(item)}
                    >{`${item}`}</div>
                  ))}
                </div>
                <InputText
                  form={form}
                  fieldName='hint'
                  label=''
                  placeHolder={trans.form.hint}
                  className='mb-4 h-[55px] bg-[var(--primary-color)]'
                />
              </div>
              <div className='mb-4 flex justify-end'>
                <ConfirmDialog
                  className='w-[80%] md:min-w-[70%]'
                  triggerCpn={
                    <ButtonMotion
                      type='submit'
                      text={trans.common.connect}
                      className='bg-white !text-[var(--primary-color)]'
                      color='var(--primary-color)'
                    />
                  }
                  onOk={() => {}}
                  title=''
                  visibleBtn={true}
                  content={
                    <div className='flex w-full flex-col gap-5 text-center'>
                      <h1 className='mt-5 text-2xl text-black md:mt-10 md:text-4xl'>{trans.form.connect_success}</h1>
                      <p className='text-lg text-black md:text-2xl'>{trans.form.description_success}</p>
                      <Image
                        className='mx-auto py-10'
                        height={400}
                        width={400}
                        src='/images/section/connect_success.png'
                        alt={trans.form.title}
                      />
                    </div>
                  }
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormConnect;
