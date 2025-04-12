// types.ts (o en el mismo archivo si prefieres)
export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormState = {
  success: boolean;
  errors: Partial<ContactFormInput>;
  message?: string;
};
