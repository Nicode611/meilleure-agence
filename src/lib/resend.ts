import { Resend } from 'resend';

export const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('La clé API Resend est manquante');
  }
  return new Resend(process.env.RESEND_API_KEY);
};
