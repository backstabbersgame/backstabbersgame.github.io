export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  contactType?: string;
  files: File[];
}
