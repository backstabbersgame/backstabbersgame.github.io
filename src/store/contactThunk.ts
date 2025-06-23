import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactFormData } from '../types/contact';

export interface AttachmentData {
  name: string;
  type: string;
  size: number;
  content: string; // base64
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';


function fileToBase64(file: File): Promise<AttachmentData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const content = (reader.result as string).split(',')[1];
      resolve({
        name: file.name,
        type: file.type,
        size: file.size,
        content,
      });
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export const sendContactEmail = createAsyncThunk<
  void,
  ContactFormData,
  { rejectValue: string }
>('contact/sendContactEmail', async (formData, { rejectWithValue }) => {
  try {
    if (formData.files.length > 5) {
      return rejectWithValue('Máximo de 5 arquivos permitidos.');
    }
    for (const file of formData.files) {
      if (file.size > 1 * 1024 * 1024) {
        return rejectWithValue('Cada arquivo deve ter no máximo 1MB.');
      }
    }

    const attachments = await Promise.all(formData.files.map(fileToBase64));

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      contactType: formData.contactType,
      attachments,
    };

    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return rejectWithValue(data?.error || 'Erro ao enviar contato');
    }
  } catch (error: any) {
    return rejectWithValue(error?.message || 'Erro desconhecido');
  }
});
