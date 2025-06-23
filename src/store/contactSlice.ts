import { createSlice } from '@reduxjs/toolkit';
import { sendContactEmail } from './contactThunk';

export interface AttachmentData {
  name: string;
  type: string;
  size: number;
  content: string; // base64
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  contactType?: string;
  files: File[]; // frontend apenas
}

export interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactEmail.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactEmail.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendContactEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = (action.payload as string) || 'Erro ao enviar contato';
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
