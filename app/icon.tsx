import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F1F3D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
          {/* Rombo amarillo */}
          <polygon points="11,1 21,11 11,21 1,11" fill="#F5BA00" />
          {/* Rayo (navy sobre amarillo) */}
          <polygon points="13,4 8,13 12,13 10,19 16,12 12,12" fill="#0F1F3D" />
          {/* Punto amarillo sobre el rayo */}
          <circle cx="10.5" cy="12.5" r="1.5" fill="#F5BA00" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
