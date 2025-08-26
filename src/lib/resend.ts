import { Resend } from 'resend';

export const getResend = () => {
  console.log('🔍 getResend appelé');
  console.log('🔑 Clé API disponible:', !!process.env.RESEND_API_KEY);
  console.log('🔑 Clé API longueur:', process.env.RESEND_API_KEY?.length);
  
  if (!process.env.RESEND_API_KEY) {
    console.log('❌ Clé API manquante');
    throw new Error('La clé API Resend est manquante');
  }
  
  console.log('✅ Clé API trouvée, création de l\'instance Resend');
  return new Resend(process.env.RESEND_API_KEY);
};
