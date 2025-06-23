'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  ContactFormInputs,
  contactSchema,
  supportedTypes,
} from '../../schemas/contactSchema';
import { sendContactEmail } from '../../store/contactThunk';
import { resetContactState } from '../../store/contactSlice';
import styles from './ContactForm.module.scss';
import {
  Button,
  InputSelect,
  InputText,
  InputTextArea,
  Upload,
} from '@backstabbersgame/design-system';
import contactData from '../../content/contact.json';

export const useAppDispatch = () => useDispatch<AppDispatch>();

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.contact
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactSchema),
    mode: 'all',
  });

  const onSubmit = async (data: ContactFormInputs) => {
    const files: File[] = (data.files ?? []).filter((f): f is File => !!f);
    await dispatch(
      sendContactEmail({
        ...data,
        files,
      })
    );
    reset();
    setTimeout(() => dispatch(resetContactState()), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={styles['contact-form']}
    >
      <div className={styles['contact-inputs']}>
        <div className={styles['contact-inputs-1']}>
          <InputText
            key='name'
            placeholder={contactData.placeholders.name}
            className={styles.nome}
            required
            error={errors.name?.message}
            {...register('name')}
          />
          <InputText
            key='email'
            placeholder={contactData.placeholders.email}
            className={styles.email}
            type='email'
            required
            error={errors.email?.message}
            {...register('email')}
          />
        </div>
        <div className={styles['contact-inputs-2']}>
          <InputSelect
            key='contactType'
            options={contactData.selectOptions}
            className={styles.eusou}
            error={errors.contactType?.message}
            {...register('contactType')}
          />
          <InputText
            key='subject'
            placeholder={contactData.placeholders.subject}
            className={styles.assunto}
            error={errors.subject?.message}
            {...register('subject')}
          />
        </div>
      </div>
      <InputTextArea
        key='message'
        placeholder={contactData.placeholders.message}
        className={styles.mensagem}
        required
        error={errors.message?.message}
        {...register('message')}
      />

      <Controller
        control={control}
        name='files'
        defaultValue={[]}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Upload
            value={value?.filter((f): f is File => !!f)}
            onChange={onChange}
            accept={supportedTypes.join(',')}
            multiple={true}
            error={error?.message}
          />
        )}
      />
      <div className={styles['submit-container']}>
        <Button
          type='submit'
          className={styles.submit}
          disabled={loading}
          arrowRight
        >
          {loading
            ? contactData.loadingLabel
            : success
              ? contactData.successLabel
              : contactData.submitLabel}
        </Button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ContactForm;
