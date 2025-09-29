import { NextRequest, NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 API Route appelée');
    console.log('🔑 Clé API disponible:', !!process.env.RESEND_API_KEY);
    
    const { name, email, message } = await request.json();
    console.log('📨 Données reçues:', { name, email, messageLength: message?.length });

    // Validation des données
    if (!name || !email || !message) {
      console.log('❌ Validation échouée');
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    console.log('✅ Validation réussie, envoi via Resend...');
    
    // Envoi de l'email via Resend
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'contact@meilleure-agence.be',
      to: ['info@immo-9.be'], // Email vérifié pour les tests
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message du formulaire de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
