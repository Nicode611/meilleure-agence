import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'API fonctionne !',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      resendKeyLength: process.env.RESEND_API_KEY?.length || 0
    }
  });
}
