import { Dispatch, SetStateAction } from "react";

export interface InitialContactForm {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

interface ShowEmailProp {
  showEmail: boolean;
}

export interface ContactCardProps extends ShowEmailProp {
  initialValues: InitialContactForm;
  setShowEmail: Dispatch<SetStateAction<boolean>>;
  onSubmit: (
    values: InitialContactForm,
    { setSubmitting }: any,
  ) => Promise<void>;
}

export interface EmailFieldProps extends ShowEmailProp {}

export interface PhoneNumberFieldProps extends ShowEmailProp {}
