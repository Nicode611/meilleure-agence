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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Éléments décoratifs en arrière-plan */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(8px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '200px',
            right: '120px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(6px)',
          }}
        />

        {/* Logo/Nom du site */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: '300',
            color: 'white',
            marginBottom: '30px',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            letterSpacing: '1px',
          }}
        >
          meilleure.agence.be
        </div>
        
        {/* Titre principal */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
            textShadow: '0 3px 8px rgba(0,0,0,0.4)',
            maxWidth: '900px',
            lineHeight: '1.1',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Choisissez votre meilleure agence immobilière
        </div>
        
        {/* Sous-titre */}
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.95)',
            textAlign: 'center',
            marginBottom: '40px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '700px',
            lineHeight: '1.3',
            fontWeight: '500',
          }}
        >
          Recevez 4 devis d&apos;agence immobilière de votre région avant de vous décider et économisez jusqu&apos;à 50%
        </div>
        
        {/* Icône maison */}
        <div
          style={{
            fontSize: '48px',
            marginTop: '20px',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
          }}
        >
          🏠
        </div>
        
        {/* Éléments décoratifs */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'rgba(255,255,255,0.7)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '50%',
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
