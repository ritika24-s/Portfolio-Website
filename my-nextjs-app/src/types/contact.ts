export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}