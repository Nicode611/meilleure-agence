import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          Hoogstoel
        </div>
        
        {/* Titre principal */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '800px',
            lineHeight: '1.2',
          }}
        >
          Trouvez le spécialiste de votre région
        </div>
        
        {/* Sous-titre */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            marginBottom: '40px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            maxWidth: '600px',
          }}
        >
          Comparez les devis avant de vous décider et économisez jusqu&apos;à 40% !
        </div>
        
        {/* Éléments décoratifs */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: '0.8',
            }}
          />
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: '0.6',
            }}
          />
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: '0.4',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
