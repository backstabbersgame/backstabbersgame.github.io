'use client';

import * as yup from 'yup';
import { validateName } from '../utils/validateName';
import { validateEmail } from '../utils/validateEmail';

export const supportedTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'text/plain',
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const MAX_FILE_SIZE = 1024 * 1024;

export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .test('is-valid-name', 'Nome muito curto', (value) => validateName(value)),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .test('is-valid-email', 'E-mail inválido', (value) => validateEmail(value)),
  subject: yup.string().optional(),
  message: yup.string().required('Mensagem é obrigatória'),
  contactType: yup.string().optional(),
  files: yup
    .array()
    .of(
      yup
        .mixed<File>()
        .test('fileType', 'Tipo de arquivo inválido', (file) =>
          file ? supportedTypes.includes(file.type) : true
        )
        .test('fileSize', 'Arquivo muito grande', (file) =>
          file ? file.size <= 1024 * 1024 : true
        )
    )
    .max(5, 'Máximo de 5 arquivos.')
    .optional(),
});

export type ContactFormInputs = yup.InferType<typeof contactSchema>;
